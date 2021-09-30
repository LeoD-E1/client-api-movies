import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { emailPattern } from "../constants/constants";
import { signin } from "../api/users/signin";
import { useQueryClient, useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import ToastComponent from "../components/ToastComponent";
import { User } from "../types/users";

const Login: FC = (): JSX.Element => {
  useQueryClient();
  const history = useHistory();

  const mutation = useMutation(async (data: User) => {
    const res: any = await signin(data);
    const response = await res.json();

    if (res.status >= 200 && res.status <= 210) {
      localStorage.setItem("token", response.token);
      history.push("/");
    }
    console.log(res);
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data, e) => {
    e?.preventDefault();
    mutation.mutate(data);
  };

  return (
    <div className="container  mt-3 pt-3">
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
            {mutation.isError && <ToastComponent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
