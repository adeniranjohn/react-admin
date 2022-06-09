import "../styles/Home.scss";
import React, { useState } from "react";
import Register from "../components/Home/Register";
import Login from "../components/Home/Login";


const Home = () => {
  const [form, setForm] = useState(true);

  const changeFormHandler = () => {
    setForm(!form);
  };

  return (
    <section className="home">
      <section className="form">
        {form ? (
          <Login changeForm={changeFormHandler} />
        ) : (
          <Register changeForm={changeFormHandler} />
        )}
      </section>
    </section>
  );
};

export default Home;
