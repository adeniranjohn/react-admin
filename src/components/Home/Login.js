import React, { useState } from "react";
import ResetEmail from "./ResetEmail";
const Login = ({ changeForm }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [emailForm, setEmailForm] = useState(true);

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(login);
  };

  const emailReset = () => {
    setEmailForm(!emailForm);
  };

  return (
    <section className="login">
      {emailForm ? (
        <form onSubmit={loginHandler}>
          <p>
            Click here to register as a
            <span onClick={changeForm}>new user</span>
          </p>
          <h3>Welcome back,</h3>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            required
            onChange={(e) => {
              setLogin({ ...login, email: e.target.value });
            }}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => {
              setLogin({ ...login, password: e.target.value });
            }}
          />

          <p>
            <small onClick={emailReset}>Forgot password?</small>
          </p>

          <button type="submit">Login</button>
        </form>
      ) : (
        <ResetEmail changeLogin={emailReset} />
      )}
    </section>
  );
};

export default Login;
