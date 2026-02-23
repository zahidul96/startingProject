import React from "react";
import Header from "./components/navbar/Header";
import MealsSummary from "./Meals/MealsSummary";
import AvailableMeals from "./Meals/AvailableMeals";
import Cart from "./components/navbar/Modal/CartModal";
const App = () => {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default App;
