import React, { useState } from "react";
import "./ToggleMode.css";
import Login from "../Login/Login.js";
const ToggleMode = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleMode = () => {
    document.body.classList.toggle("night-mode");
    setIsNightMode(!isNightMode);
  };

  return (
    <div className="app">
      <Login />
      <div>
        <button className="top-right-button" onClick={toggleMode}>
          {isNightMode ? "Night Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default ToggleMode;
