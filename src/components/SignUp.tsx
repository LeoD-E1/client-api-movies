import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "../styles/styles.css";

interface NewUser {
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUser>();

  const onSubmit: SubmitHandler<NewUser> = (data, e) => {
    console.log(data);
    e?.target.reset();
  };

  const emailPattern =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  return (
    <div className="container">
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
                  {...register("username", { required: true, min: 6, max: 20 })}
                ></input>
                {errors.username?.type === "required" && (
                  <span>Username field is required</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
