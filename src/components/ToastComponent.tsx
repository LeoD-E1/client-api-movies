import React, { useState } from "react";
import { Toast } from "react-bootstrap";

const ToastComponent = () => {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  const today = new Date();
  return (
    <Toast show={show} onClose={toggleShow} className="wrap">
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Message</strong>
        <small>{today.getHours() + ":" + today.getMinutes()}</small>
      </Toast.Header>
      <Toast.Body>Failure</Toast.Body>
    </Toast>
  );
};

export default ToastComponent;
