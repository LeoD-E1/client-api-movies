import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { emailPattern } from "../constants/constants";

interface User {
  email: string;
  password: string;
}

const Login: FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data, e) => {
    console.log(data);
    e?.target.reset();
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-5">
          <h2 className="heading-section">Login</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="login-wrap p-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group m-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  {...register("email", {
                    pattern: emailPattern,
                    required: true,
                  })}
                  required
                ></input>
                {errors.email?.type === "required" && (
                  <span>Email field is required</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span>Type a valid email</span>
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
                {errors.password?.type === "required" && (
                  <span>Password field is required</span>
                )}
              </div>
              <div className="form-group m-2">
                <button
                  type="submit"
                  className="form-control btn btn-primary submit px-3"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
