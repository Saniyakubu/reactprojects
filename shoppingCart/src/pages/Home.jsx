import React, { useContext } from 'react';
import { StoreContext } from '../context/contextStore';
import { Link } from 'react-router-dom';
const Home = () => {
  const { storeItems, addToCart, cartItems } = useContext(StoreContext);

  console.log(storeItems);

  return (
    <main>
      <Link to={'/cart'}>cart</Link>
      {storeItems && (
        <div className="main">
          {storeItems.map((product) => {
            const { id, title, price, image } = product;
            return (
              <div className="items" key={id}>
                <div className="imgDiv">
                  <img src={image} />
                </div>
                <div>
                  <h1>{title}</h1>
                  <p>${price}</p>
                  <button onClick={() => addToCart(id)}>
                    Add To Cart {cartItems[id] > 0 && cartItems[id]}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Home;
