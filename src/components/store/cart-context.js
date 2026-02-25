import React from "react";
const CartContext = React.createContext({
    item: [],
    totalAmount:0,
    addItem:()=>{},
    removeItem:()=>{},
    message:"munna"
})
export default CartContext;