import { useContext } from 'react';
import { StoreContext } from '../context/contextStore';

const Cart = () => {
  const {
    storeProducts,
    cartProducts,
    addToCart,
    removeFromCart,
    updateAmount,
    getTotalAmount,
  } = useContext(StoreContext);

  const totalPrice = getTotalAmount();

  return (
    <div className="box">
      {storeProducts.map((items) => {
        const { id, title, image, price } = items;
        if (cartProducts[id] > 0) {
          return (
            <div key={id}>
              <div>
                <img style={{ width: '100px' }} src={image} />
              </div>
              <h1>{title}</h1>
              <p>{price}</p>
              <button onClick={() => removeFromCart(id)}>-</button>
              <input
                value={cartProducts[id]}
                onChange={(e) => updateAmount(Number(e.target.value), id)}
              />
              <button onClick={() => addToCart(id)}>+</button>
            </div>
          );
        }
      })}
      <h1>price: {totalPrice}</h1>
    </div>
  );
};

export default Cart;
