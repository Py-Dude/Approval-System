// import React, { useState } from "react";

import "./Register.css";

import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();


  return (
    <>
      <div className="Outer">
        <img
          className="ily2"
          width={150}
          height={150}
          src="logo512.png"
          alt="Hello World"
        />

        <form className="ily">
          <label>Name</label>
          <input type="text" name="email" required />
          <label>Email address</label>
          <input type="email" name="email" required />
          <label>Password</label>
          <input type="password" name="password" required />
          <button onClick={() => navigate("/home")}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Register;
