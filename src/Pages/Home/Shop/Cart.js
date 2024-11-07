// cart.js
import { useState } from 'react';

// Cart management functions
export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupProduct, setPopupProduct] = useState(null);

  // Add product to the cart and show popup
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setPopupProduct(product);
    setShowPopup(true);

    // Close the popup after 2 seconds
    setTimeout(() => setShowPopup(false), 2000);
  };

  return {
    cart,
    addToCart,
    showPopup,
    popupProduct,
  };
};
