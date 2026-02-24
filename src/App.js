import React,{useState} from "react";
import Header from "./components/navbar/Header";
import MealsSummary from "./Meals/MealsSummary";
import AvailableMeals from "./Meals/AvailableMeals";
import Cart from "./components/navbar/Modal/CartModal";
const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = ()=>{
    setCartIsShown(true)
  }
  const hideCartHandler = ()=>{
    setCartIsShown(false)
  }
  return (
    <React.Fragment>
      { cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default App;
