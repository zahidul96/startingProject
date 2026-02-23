import React from "react";
import Header from "./components/navbar/Header";
import MealsSummary from "./Meals/MealsSummary";
import AvailableMeals from "./Meals/AvailableMeals";
const App=()=> {
  return (
    <div>
      <Header/>
      <MealsSummary/>
      <AvailableMeals/>
    </div>
  );
}

export default App;
