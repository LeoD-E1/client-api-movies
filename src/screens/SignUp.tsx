import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { emailPattern } from "../constants/constants";
import "../styles/styles.css";
import { NewUser } from "../types/users";
import { useMutation, useQueryClient } from "react-query";
import { createUser } from "../api/users/createUser";
import SignupToast from "../components/SignupToast";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUser>();

  useQueryClient();

  const mutation = useMutation((data: NewUser) => createUser(data));

  const onSubmit: SubmitHandler<NewUser> = (data, e) => {
    mutation.mutate(data);
    e?.target.reset();
  };

  return (
    <div className="container  mt-3 pt-3">
      {mutation.isSuccess && <SignupToast />}
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-5">
          <h2 className="heading-section">Sign up</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="login-wrap p-0">
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
              {mutation.isLoading && <h4>Signing up...</h4>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
