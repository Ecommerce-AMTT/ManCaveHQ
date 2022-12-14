import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";

import Cart from "../components/Cart";
import { useStoreContext } from "../utils/GlobalState";
import Loading from "../components/Loading";

import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";

export default function Detail() {
  const { t } = useSelector((state) => {
    return state.translate;
  });

  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  let navigate = useNavigate();

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise("cart", "delete", { ...currentProduct });
  };

  return (
    <>
      <Cart />
      {currentProduct && cart ? (
        <Container className='d-flex align-items-center justify-content-center my-3'>
          <Card
            className=' p-3 '
            style={{
              width: "45rem",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
            }}
          >
            <a href= "#" className='m-1' style={{ color: "black" }} onClick={() => navigate(-1)}>
              ??? {t("Menu:Back")}
            </a>
            <Card.Title style={{ fontSize: "3rem" }}>
              {currentProduct.name}
            </Card.Title>

            <Card.Text>{currentProduct.description}</Card.Text>

            <Card.Text className='detail-text'>
              <strong>{t("Menu:price")}:</strong>${currentProduct.price}{" "}
              <Button className='button-85 m-2' onClick={addToCart}>
                {t("Menu:add_to_cart")}
              </Button>
              <Button
                className='button-85'
                disabled={!cart.find((p) => p._id === currentProduct._id)}
                onClick={removeFromCart}
              >
                {t("Menu:remove_from_cart")}
              </Button>
            </Card.Text>

            <Card.Img
              src={`/images/${currentProduct.image}`}
              alt={currentProduct.name}
            />
          </Card>
        </Container>
      ) : null}
      {loading ? <Loading /> : null}
    </>
  );
}
