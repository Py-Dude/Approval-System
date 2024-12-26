// import React, { useState } from "react";

import "./Login.css";

const Login = () => {
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
          <text>Email address</text>
          <input type="email" name="email" />
          <text>Password</text>
          <input type="password" name="password" />
          <button onClick={SubmitEvent}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
