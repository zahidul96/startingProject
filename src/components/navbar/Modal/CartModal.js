import React, { Fragment } from "react";
import ReactDOM from "react-dom"
import "./CartModal.css";
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};
const ModalOverLay = (props) => {
  return (
    <div className="modal">
      <p>Sushi</p>
      <div className="total">
        <h4>Total amount</h4>
        <span>35.22</span>
      </div>
      <div className="actions">
        <button type="button" className={["button--alt"]} onClick={props.onCloseCart}>
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
        <Backdrop onClose={props.onCloseCart}/>,
        document.getElementById("backdrop-root"),
      )}
      {ReactDOM.createPortal(
        <ModalOverLay onCloseCart={props.onCloseCart}/>,
        document.getElementById("overlay-root"),
      )}
    </React.Fragment>
  );
};
export default Cart;
