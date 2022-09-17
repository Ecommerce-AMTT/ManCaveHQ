import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <div className='flex-row py-1'>
      <div>
        <img src={`/images/${item.image}`} alt='' />
      </div>
      <div>
        <div>
          {item.name}, ${item.price}
        </div>
        <div>
          <span style={{ paddingRight: "1rem" }}>Qty:</span>
          <input
            style={{
              textAlign: "center",
              padding: 0,
              border: "1px solid #888C8C",
            }}
            type='number'
            placeholder='1'
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role='img'
            aria-label='trash'
            onClick={() => removeFromCart(item)}
          >
            <i className='fa fa-trash trash' aria-hidden='true'></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
