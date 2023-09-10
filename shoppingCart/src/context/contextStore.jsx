import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const StoreContext = createContext([]);

const ContextStore = ({ children }) => {
  const [storeProducts, setStoreProducts] = useState([]);

  const [btn, setBtn] = useState([]);

  const [cartProducts, setCartProducts] = useState([]);

  const hasNumberBiggerThanZero = Object.values(cartProducts).some(
    (value) => value > 0
  );

  async function getItems() {
    try {
      const res = await axios.get('https://fakestoreapi.com/products/');
      console.log(res);
      const data = await res.data;
      if (data) {
        setStoreProducts(data);
        const addNewBtn = [
          'all',
          ...new Set(
            data.map((items) => {
              return items.category;
            })
          ),
        ];
        setBtn(addNewBtn);
      }
      function CartItems() {
        let cart = {};
        for (let i = 1; i < data.length + 1; i++) {
          cart[i] = 0;
          /* const local = localStorage.setItem('cartItems', JSON.stringify(cart));
          setCartProducts(local); */
          setCartProducts(cart);
        }
      }
      CartItems();
    } catch (error) {
      console.log(error);
    }
  }

  async function filteredItem(category) {
    if (category === 'all') {
      const res = await axios.get('https://fakestoreapi.com/products/');
      console.log(res);
      const data = await res.data;
      const filteredAll = data.filter((item) => item);
      setStoreProducts(filteredAll);
    } else {
      const res = await axios.get('https://fakestoreapi.com/products/');
      const data = await res.data;
      const filtered = data.filter((item) => item.category === category);
      setStoreProducts(filtered);
    }
    return filtered;
  }

  function addToCart(itemId) {
    setCartProducts((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  function removeFromCart(itemId) {
    setCartProducts((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  function updateAmount(newAmount, itemId) {
    setCartProducts((prev) => ({ ...prev, [itemId]: newAmount }));
  }

  const getTotalAmount = () => {
    let totalAmount = 0;
    let formattedNumber;
    let local;
    /*      const userJSON.parse(localStorage.getItem('cartItems')) || */
    for (const item in cartProducts) {
      if (cartProducts[item] > 0) {
        let itemInfo = storeProducts.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartProducts[item] * itemInfo.price;
        formattedNumber = parseFloat(totalAmount.toFixed(10).toString());
        local = formattedNumber.toLocaleString();
      }
    }
    return local;
  };

  useEffect(() => {
    getItems();
  }, []);
  /* 
  useEffect(() => {
    const local = localStorage.setItem(
      'cartItems',
      JSON.stringify(cartProducts)
    );
    setCartProducts(local);
  }, [cartProducts]); */

  const store = {
    cartProducts,
    storeProducts,
    addToCart,
    removeFromCart,
    updateAmount,
    getTotalAmount,
    filteredItem,
    btn,
    hasNumberBiggerThanZero,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default ContextStore;
