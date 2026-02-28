import React, { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";
import ReactDOM from "react-dom";
import "./CartModal.css";
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};
const ModalOverLay = (props) => {
  const crtctx = useContext(CartContext);
  const removeItemHandler = (id) => {
    crtctx.removeItem(id);
  };
  const cartItems = (
    <ul>
      {crtctx.item.map((ele) => (
        <li key={ele.id} className="list-item">
          <span>{ele.name}</span> 
          <span>Price {ele.price}</span> 
          Qty:{ele.quantity}
          <button className="btn" onClick={() => removeItemHandler(ele.id)}>
            -
          </button>
        </li>
      ))}
    </ul>
  );
  let total = 0;
  let quantity = 0;
  crtctx.item.forEach((ele) => {
    total = total + ele.price;
  });
  crtctx.item.forEach((ele) => {
    quantity = quantity + Number(ele.quantity);
  });
  return (
    <div className="modal">
      {cartItems}
      <div className="total">
        <h4>Total amount</h4>
        <span>{total}</span>
      </div>
      <div className="total">
        <h4>Total Quantity</h4>
        <span>{quantity}</span>
      </div>
      <div className="actions">
        <button
          type="button"
          className={["button--alt"]}
          onClick={props.onCloseCart}
        >
          Close
        </button>
        <button type="button" className="button">
          Order
        </button>
      </div>
    </div>
  );
};
const Cart = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onCloseCart} />,
        document.getElementById("backdrop-root"),
      )}
      {ReactDOM.createPortal(
        <ModalOverLay onCloseCart={props.onCloseCart} />,
        document.getElementById("overlay-root"),
      )}
    </React.Fragment>
  );
};
export default Cart;
