import { useContext } from 'react';
import { StoreContext } from '../context/contextStore';
import { AiFillStar } from 'react-icons/ai';
import Button from '@mui/material/Button';
const Home = () => {
  const {
    storeProducts,
    cartProducts,
    addToCart,
    filtered,
    btn,
    filteredItem,
  } = useContext(StoreContext);
  console.log(btn);
  console.log(filtered);
  return (
    <main>
      <div className="btnGroup">
        {btn.map((button) => {
          return (
            <Button
              variant="contained"
              onClick={() => filteredItem(button)}
              className="btns"
            >
              {button}
            </Button>
          );
        })}
      </div>
      <section className="items">
        {storeProducts &&
          storeProducts.map((product) => {
            const { id, title, price, image, rating } = product;
            const prodAmount = cartProducts[id];
            return (
              <div key={id} className="box">
                <div className="prodImgBox">
                  <img style={{ width: '100px' }} src={image} />
                </div>
                <div className="title">
                  <h1>{title}</h1>
                  <p>${price}</p>
                  <span className="iconbox">
                    {rating.rate <= 2 ? (
                      <>
                        <AiFillStar className="icon" />
                        {rating.rate}
                      </>
                    ) : rating.rate <= 3 ? (
                      <>
                        <AiFillStar className="icon" />
                        <AiFillStar className="icon" />

                        {rating.rate}
                      </>
                    ) : rating.rate <= 4 ? (
                      <>
                        <AiFillStar className="icon" />
                        <AiFillStar className="icon" />
                        <AiFillStar className="icon" />

                        {rating.rate}
                      </>
                    ) : rating.rate <= 5 ? (
                      <>
                        <AiFillStar className="icon" />
                        <AiFillStar className="icon" />
                        <AiFillStar className="icon" />
                        <AiFillStar className="icon" />

                        {rating.rate}
                      </>
                    ) : null}
                  </span>
                  <div className="btnBox">
                    <Button variant="contained" onClick={() => addToCart(id)}>
                      Add To Cart ({prodAmount})
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </main>
  );
};

export default Home;
