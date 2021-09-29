import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface User {
  email: string;
  password: string;
}

const Login: FC = (): JSX.Element => {
  const regexEmail =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

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
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { pattern: regexEmail, required: true })}
          required
        ></input>
        {errors.email?.type === "required" && (
          <span>Email field is required</span>
        )}
        {errors.email?.type === "pattern" && <span>Type a valid email</span>}
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          required
        ></input>
        {errors.password?.type === "required" && (
          <span>Password field is required</span>
        )}
        <button type="submit">Sign in</button>
      </form>
    </>
  );
};

export default Login;
