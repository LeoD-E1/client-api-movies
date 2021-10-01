import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { emailPattern } from "../constants/constants";
import "../styles/styles.css";
import { NewUser } from "../types/users";
import { useMutation, useQueryClient } from "react-query";
import { createUser } from "../api/users/createUser";
import { useHistory, Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const SignUp = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUser>();

  useQueryClient();

  const mutation = useMutation(async (data: NewUser) => {
    const res: any = await createUser(data);
    const response = await res.json();
    if (res.status >= 200 && res.status <= 210) {
      localStorage.setItem("token", response.token);
      history.push("/");
    } else {
      const message: any = document.getElementById("message");
      message.innerHTML = response.message;
    }
  });

  const onSubmit: SubmitHandler<NewUser> = (data, e) => {
    mutation.mutate(data);
  };

  return (
    <div className="container  mt-3 pt-3">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-5">
          <h2 className="heading-section">Sign up</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="login-wrap p-0">
            <div className="row">
              <div className="col-md-9 col-lg-10">
                <span id="message"></span>
              </div>
              <div className="col-md-3 col-lg-2">
                {mutation.isLoading && (
                  <Spinner animation="border" size="sm" role="status" />
                )}
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
              <div className="form-group m-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  {...register("username", {
                    required: true,
                    minLength: 5,
                    maxLength: 20,
                  })}
                  required
                ></input>
                {errors.username?.type === "required" && (
                  <span>Username field is required</span>
                )}
                {errors.username?.type === "minLength" && (
                  <span>min 5 characters</span>
                )}
                {errors.username?.type === "maxLength" && (
                  <span>max 20 characters</span>
                )}
              </div>
              <div className="form-group m-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: emailPattern,
                  })}
                  required
                ></input>
                {errors.email?.type === "required" && (
                  <span>Email field is required</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span>Insert a valid Email</span>
                )}
              </div>
              <div className="form-group m-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  {...register("password", { required: true })}
                  required
                ></input>
                <span className="fa fa-fw fa-eye field-icon toggle-password"></span>
                {errors.password?.type === "required" && (
                  <span>Password field is required</span>
                )}
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="form-control btn btn-primary submit px-3"
                >
                  Sign up
                </button>
              </div>
            </form>
            <Link to="/login">
              <p>Login</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
