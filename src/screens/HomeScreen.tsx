import React, { FC } from "react";
import { Link } from "react-router-dom";

const HomeScreen: FC = (): JSX.Element => {
  const token = localStorage.getItem("token");
  if (token) {
    return <h1>HomeScreen</h1>;
  }
  return (
    <Link to="/login">
      <p>Login</p>
    </Link>
  );
};

export default HomeScreen;
