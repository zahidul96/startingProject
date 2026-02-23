import React from "react";
import "./MealItem.css"
const MealItem = (props) => {
  return (
      <div className="meal">
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{props.price}</div>
      </div>
  );
};
export default MealItem;
