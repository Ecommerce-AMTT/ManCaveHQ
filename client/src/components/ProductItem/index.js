import React from "react";
import { Card, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { useSelector } from "react-redux";
import StarRatingDisabled from "../../pages/StarRatingDisabled";

function ProductItem(item) {
  const { t } = useSelector((state) => {
    // console.log("Contact.state ", state);
    return state.translate;
  });

  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <Card
      className='p-2 m-3 text-center hover-card'
      style={{
        width: "16rem",
        background:
          "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
      }}
    >
      <Link to={`/products/${_id}`}>
        <Card.Img alt={name} src={`/images/${image}`} />
        <Card.Text>{name}</Card.Text>
      </Link>
      <div style={{ paddingLeft: 0, margin: "1rem 0" }}>
        <Link to={`/products/${_id}/reviews`}>
          <StarRatingDisabled starCount={5} hoverIndex={5}></StarRatingDisabled>
        </Link>
        <span>${price}</span>
      </div>
      <Button className='button-85' onClick={addToCart}>
        {t("Menu:add_to_cart")}
      </Button>
    </Card>
  );
}

export default ProductItem;
