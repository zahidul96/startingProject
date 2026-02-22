import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";
import mealsImage from "../../resources/meals.jpg"
const Header = () => {
  return (
    <div>
      <header className="header">
        <h1>ReactMeals</h1>
        <div className="cart">
            <FontAwesomeIcon icon={faCartShopping} className="icon" />
            <span>Your Cart</span>
            <span className="badge">0</span>
        </div>
      </header>
      <div className="main-image">
        <img src={mealsImage}/>
      </div>
    </div>
  );
};
export default Header;
