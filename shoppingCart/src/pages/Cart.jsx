import React, { useContext } from 'react';
import { StoreContext } from '../context/contextStore';
const Cart = () => {
  const {
    storeItems,
    cartItems,
    addToCart,
    removeFromCart,
    updateCart,
    getTotalCartAmount,
  } = useContext(StoreContext);
  console.log(cartItems);
  const totalAmount = getTotalCartAmount();
  return (
    <div className="box">
      {storeItems.map((items) => {
        const { id, title, price, image } = items;
        if (cartItems[id] > 0) {
          return (
            <div className="cartItems">
              <div className="img">
                <img src={image} />
              </div>
              <div>
                <h1>{title}</h1>
                <p>{price}</p>
              </div>
              <div>
                <button onClick={() => removeFromCart(id)}>-</button>
                <input
                  value={cartItems[id]}
                  onChange={(e) => updateCart(Number(e.target.value), id)}
                />
                <button onClick={() => addToCart(id)}>+</button>
              </div>
            </div>
          );
        }
      })}
      <h1>total amount {totalAmount}</h1>
    </div>
  );
};

export default Cart;
