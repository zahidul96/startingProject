import React, { useContext, useState } from "react";
import CartContext from "../components/store/cart-context";
import "./MealItemForm.css";
const MealItemForm = (props) => {
  const [enteredquantity, setQuantity] = useState();
  const quatityChangeHandler = (event) => {
    setQuantity(event.target.value);
  };
  const crtctx = useContext(CartContext);
  const addItemsToCart = (event) => {
    console.log("form was called")
    event.preventDefault();
    crtctx.addItem({ ...props.item, quantity: enteredquantity });
    setQuantity("")
  };
  return (
    <form className="form-input" onSubmit={addItemsToCart}>
      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        id="amount"
        onChange={quatityChangeHandler}
        value={enteredquantity}
      />
      <br />
      <div className="div-button">
        <button type="submit">+Add</button>
      </div>
    </form>
  );
};
export default MealItemForm;
