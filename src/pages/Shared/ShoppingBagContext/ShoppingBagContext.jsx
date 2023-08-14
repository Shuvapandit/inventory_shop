import React, { createContext, useContext, useEffect, useState } from "react";
const ShoppingBagContext = createContext();
export const useShoppingBag = () => useContext(ShoppingBagContext);
export const ShoppingBagProvider = ({ children }) => {
  const [bagCount, setBagCount] = useState(0);
  const [bagItems, setBagItems] = useState([]);
  useEffect(() => {
    const storedBagItems = JSON.parse(localStorage.getItem("bagItems")) || [];
    setBagItems(storedBagItems);
    setBagCount(storedBagItems.length);
  }, []);
  const addToBag = (productId) => {
    const updatedBagItems = [...bagItems];

    if (updatedBagItems.includes(productId)) {
      const index = updatedBagItems.indexOf(productId);
      updatedBagItems.splice(index, 1);
    } else {
      updatedBagItems.push(productId);
    }

    localStorage.setItem("bagItems", JSON.stringify(updatedBagItems));
    setBagItems(updatedBagItems);
    setBagCount(updatedBagItems.length);
  };

  return (
    <ShoppingBagContext.Provider value={{ bagCount, addToBag }}>
      {children}
    </ShoppingBagContext.Provider>
  );
};
