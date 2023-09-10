import { useContext } from 'react';
import { StoreContext } from '../context/contextStore';
import { TbPlus, TbMinus } from 'react-icons/tb';
import { Button } from '@mui/material';
import '../scss/Cart.scss';
const Cart = () => {
  const {
    storeProducts,
    cartProducts,
    addToCart,
    removeFromCart,
    updateAmount,
    getTotalAmount,
    hasNumberBiggerThanZero,
  } = useContext(StoreContext);
  console.log(cartProducts);
  const totalPrice = getTotalAmount();

  return (
    <>
      {hasNumberBiggerThanZero ? (
        <div className="box">
          <h1>Shopping Cart</h1>
          <div className="cartBox">
            <header className="titles">
              <h1>product</h1>
              <div>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>
              <p className="mycart">My Cart</p>
            </header>
            {storeProducts &&
              storeProducts.map((items) => {
                const { id, title, image, price } = items;

                if (cartProducts[id] > 0) {
                  return (
                    <div key={id} className="productsBox">
                      <div className="product">
                        <div className="productimg">
                          <img src={image} />
                          <p>{title}</p>
                        </div>

                        <div className="productInfo">
                          <p>${price}</p>
                          <div className="input">
                            <Button
                              variant="contained"
                              className="btncart"
                              onClick={() => addToCart(id)}
                            >
                              <TbPlus />
                            </Button>
                            <input
                              type="number"
                              value={cartProducts[id]}
                              onChange={(e) =>
                                updateAmount(Number(e.target.value), id)
                              }
                            />
                            <Button
                              variant="contained"
                              className="btncart"
                              onClick={() => removeFromCart(id)}
                            >
                              <TbMinus />
                            </Button>
                          </div>

                          <p className="sub">${price}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
          <div className="total">
            <div>
              <div>
                <h1>subtotal</h1>
              </div>
              <div>
                <h1> ${totalPrice}</h1>
              </div>
            </div>
            <div>
              <div>
                <h1>Total</h1>
              </div>
              <div>
                <h1>${totalPrice}</h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty">
          <h1>Your cart is currently empty</h1>
        </div>
      )}
    </>
  );
};

export default Cart;
