import React,{useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";
import mealsImage from "../../resources/meals.jpg"
import CartContext from "../store/cart-context";
const Header = (props) => {
  const ctx = useContext(CartContext);
  let quantity = 0;
  ctx.item.forEach((ele)=>{
      quantity= quantity+ Number(ele.quantity)
  })
  return (
    <div>
      <header className="header">
        <h1>ReactMeals</h1>
        <div className="cart" onClick={props.onShowCart}>
            <FontAwesomeIcon icon={faCartShopping} className="icon" />
            <span>Your cart</span>
            <span className="badge">{quantity}</span>
        </div>
      </header>
      <div className="main-image">
        <img src={mealsImage}/>
      </div>
    </div>
  );
};
export default Header;
