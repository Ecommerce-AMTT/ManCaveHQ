import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import Jumbotron from "../components/Jumbotron";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import Loading from "../components/Loading";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      try {
        const cart = await idbPromise("cart", "get");
        const products = cart.map((item) => {
          console.log("cart_item", item);
          return {
            _id: item._id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          };
        });

        if (products.length) {
          const { data } = await addOrder({ variables: { products } });
          const productData = data.addOrder.products;

          productData.forEach((item) => {
            idbPromise("cart", "delete", item);
          });
        }

        setTimeout(() => {
          window.location.assign("/orderHistory");
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <Jumbotron>
        <Loading />
        <h1>Purchase Complete!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
