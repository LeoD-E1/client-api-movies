import React, { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import "../styles/styles.css";

const AuthScreen = () => {
  const [account, setAccount] = useState(false);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h3 className="mb-4 text-center">Have you an account?</h3>
        <input type="checkbox" onClick={() => setAccount(!account)}></input>
      </div>
      {!account ? <SignUp /> : <Login />}
    </div>
  );
};

export default AuthScreen;
