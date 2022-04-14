import React from "react";
import ReactDOM from "react-dom";
import classes from "./modal.module.css";

const Modal = (props) => {
  const OverlayModal = (props) => {
    return (
      <div className={classes.modal}>
        <img src={props.src} />
      </div>
    );
  };
  const Backdrop = () => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>;
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onConfirm} />,
        document.getElementById("Backdrop")
      )}
      {ReactDOM.createPortal(
        <OverlayModal src={props.src} />,
        document.getElementById("Modal")
      )}
    </React.Fragment>
  );
};

export default Modal;
