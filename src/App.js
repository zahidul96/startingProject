import React, { useState } from "react";
import Header from "./components/navbar/Header";
import MealsSummary from "./Meals/MealsSummary";
import AvailableMeals from "./Meals/AvailableMeals";
import Cart from "./components/navbar/Modal/CartModal";
import CartProvider from "./components/store/cartContextProvider";
const App = () => {

  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <MealsSummary />
      <AvailableMeals />
    </CartProvider>
  );
};

export default App;
