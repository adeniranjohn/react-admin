import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from "../../redux/userSlice";

const Register = ({ changeForm }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  
  const [registration, setRegistration] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const registrationHandler = (e) => {
    e.preventDefault();
    console.log(registration);
    dispatch(registerUser(registration));
    console.log(state)

  };

  return (
    <section className="registration">
      <form onSubmit={registrationHandler}>
        <p>
          Click here to sign in as an<span onClick={changeForm}>old user</span>
        </p>

        <h3>Registration</h3>

        <label>First name</label>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          required
          onChange={(e) => {
            setRegistration({ ...registration, firstName: e.target.value });
          }}
        />

        <label>Last name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          required
          onChange={(e) => {
            setRegistration({ ...registration, lastName: e.target.value });
          }}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
          onChange={(e) => {
            setRegistration({ ...registration, email: e.target.value });
          }}
        />
        <label>Phone number</label>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="+2348131510308"
          required
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
          required
          onChange={(e) => {
            setRegistration({ ...registration, password: e.target.value });
          }}
        />

        <label>Confirm password</label>
        <input
          type="password"
          required
          name="confirmPassword"
          placeholder="Confirm password"
        />

        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default Register;
