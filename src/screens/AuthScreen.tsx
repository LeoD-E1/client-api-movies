import React, { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import "../styles/styles.css";

const AuthScreen = () => {
  const [account, setAccount] = useState(false);

  return (
    <div className="container mt-3 pt-3">
      <div className="row justify-content-center">
        <h5 className="mb-4 text-center">
          Have you an account?{" "}
          <input type="checkbox" onClick={() => setAccount(!account)}></input>
        </h5>
      </div>
      {!account ? <SignUp /> : <Login />}
    </div>
  );
};

export default AuthScreen;
