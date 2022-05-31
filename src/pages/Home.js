import "../styles/Home.scss";
import React, { useState } from "react";
const Home = () => {
  const [form, setForm] = useState(true);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [registration, setRegistration] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const changeFormHandler = () => {
    setForm((prevState) => !prevState);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(login);
  };

  const registrationHandler = (e) => {
    e.preventDefault();
    console.log(registration);
  };

  return (
    <section className="home">
          <section className="form">
      {form ? (
        <section className="login">
          <form onSubmit={loginHandler}>
            <h3>Welcome back,</h3>
            <label>E-mail</label>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              onChange={(e) => {
                setLogin({ ...login, email: e.target.value });
              }}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setLogin({ ...login, password: e.target.value });
              }}
            />

            <p>
              Click here to register as a
              <span onClick={changeFormHandler}>new user</span>
            </p>
            <button type="submit">Login</button>
          </form>
        </section>
      ) : (
        <section className="registration">
          <form onSubmit={registrationHandler}>
            <h3>Registration</h3>
            <p>
              Click here to sign in as an<span onClick={changeFormHandler}>old user</span>
            </p>
            <label>First name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={(e) => {
                setRegistration({ ...registration, firstName: e.target.value });
              }}
            />

            <label>Last name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={(e) => {
                setRegistration({ ...registration, lastName: e.target.value });
              }}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={(e) => {
                setRegistration({ ...registration, email: e.target.value });
              }}
            />
            <label>Phone number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="+2348131510308"
              onChange={(e) => {
                setRegistration({
                  ...registration,
                  phoneNumber: e.target.value,
                });
              }}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setRegistration({ ...registration, password: e.target.value });
              }}
            />

            <label>Confirm password</label>
            <input type="password" name="confirmPassword"  placeholder="Confirm password" />

            <button type="submit">Register</button>
          </form>
          
        </section>
      )}
    </section>
    </section>

  );
};

export default Home;
