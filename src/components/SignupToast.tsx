import React, { useState } from "react";
import { Toast } from "react-bootstrap";

const SignupToast = () => {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  const today = new Date();
  return (
    <Toast show={show} onClose={toggleShow}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Sucess!</strong>
        <small>{today.getHours() + ":" + today.getMinutes()}</small>
      </Toast.Header>
      <Toast.Body>Your account has been created!</Toast.Body>
    </Toast>
  );
};

export default SignupToast;
