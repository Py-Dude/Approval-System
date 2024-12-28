import React, { useState } from "react";
import "./ToggleMode.css";
import Login from "../Login/Login.js";
<<<<<<< Updated upstream
=======
import Register from "../Register/Register.js";

// Functional Component Starting
>>>>>>> Stashed changes
const ToggleMode = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const toggleMode = () => {
    document.body.classList.toggle("night-mode");
    setIsNightMode(!isNightMode);
  };

  const Mode = (e) => {
    console.log(e);
    setIsLoginMode(e);
  };

  return (
    <div className="app">
      <div className="user">
        <button onClick={() => Mode(true)}>Login</button>
        <button onClick={() => Mode(false)}>Register</button>
      </div>
      <div>
        {isLoginMode ? <Login /> : <Register />}
        <div>
          <button className="top-right-button" onClick={toggleMode}>
            {isNightMode ? "Night Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToggleMode;
