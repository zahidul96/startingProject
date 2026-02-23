import React, { Fragment } from "react";
import ReactDOM from "react-dom"
import "./CartModal.css";
const Backdrop = (props) => {
  return <div className="backdrop"></div>;
};
const ModalOverLay = () => {
  return (
    <div className="modal">
      <p>Sushi</p>
      <div className="total">
        <h4>Total amount</h4>
        <span>35.22</span>
      </div>
      <div className="actions">
        <button type="button" className={["button--alt"]}>
          Close
        </button>
        <button type="button" className="button">
          Order
        </button>
      </div>
    </div>
  );
};
const Cart = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root"),
      )}
      {ReactDOM.createPortal(
        <ModalOverLay />,
        document.getElementById("overlay-root"),
      )}
    </React.Fragment>
  );
};
export default Cart;
