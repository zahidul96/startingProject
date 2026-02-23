import React from "react";
import "./MealItemForm.css"
const MealItemForm=()=>{
    return(
        <form className="form-input">
            <label htmlFor="amount">Amount</label>
            <input type="number"/>
            <br/>
            <div className="div-button">
            <button type="button">+Add</button>
            </div>
        </form>
    )
}
export default MealItemForm;