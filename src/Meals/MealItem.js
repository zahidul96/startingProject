import React from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  return (
    <div className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{props.price}</div>
      </div>
      <div><MealItemForm/></div>
    </div>
  );
};
export default MealItem;
