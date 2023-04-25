import React, { createContext, useState, useCallback } from "react";
import { ProductsList as PRODUCTS } from "../data/products";

export const ProductContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const productsData = PRODUCTS.map((p) => {
  const { id, name, detail, img } = p;
  return { id, name, detail, img };
});

console.log(productsData);

export const ProductContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // const addToWishlist = (productId) => {
  //   const product = PRODUCTS.find((p) => p.id === productId);
  //   if (!wishlist.some((p) => p.id === productId)) {
  //     setWishlist((prev) => { ...prev, [productId]: product });
  //   }
  // };

  // const removeFromWishlist = (productId) => {
  //   const { [productId]: removedProduct, ...rest } = wishlist;
  //   setWishlist(rest);
  // };

  const addToWishlist = (productId) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (product) {
      setWishlist((prev) => {
        if (prev.some((p) => p.id === productId)) {
          return prev.filter((p) => p.id !== productId);
        } else {
          return [...prev, product];
        }
      });
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((p) => p.id !== productId));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const getTotalCart = () => {
    let totalCart = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalCart += cartItems[item];
      }
    }
    return totalCart;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    wishlist,
    addToWishlist,
    removeFromWishlist,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCart,
    productsData,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};
