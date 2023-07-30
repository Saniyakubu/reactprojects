import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const StoreContext = createContext([]);

const ContextStore = ({ children }) => {
  const [storeItems, setStoreItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  async function getItems() {
    try {
      const res = await axios('https://fakestoreapi.com/products/');
      const data = res.data;
      setStoreItems(data);

      if (data) {
        function getDefaultCart() {
          let Cart = {};
          for (let i = 1; i < data.length + 1; i++) {
            Cart[i] = 0;
            setCartItems(Cart);
          }
        }
        getDefaultCart();
      }
    } catch (error) {}
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = storeItems.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  function addToCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }
  function removeFromCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  function updateCart(newAmount, itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  }

  useEffect(() => {
    getItems();
  }, []);

  const ContextItems = {
    storeItems,
    setStoreItems,
    addToCart,
    removeFromCart,
    cartItems,
    updateCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={ContextItems}>
      {children}
    </StoreContext.Provider>
  );
};

export default ContextStore;
