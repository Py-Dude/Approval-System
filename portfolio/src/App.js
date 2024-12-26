import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleMode = () => {
    document.body.classList.toggle("night-mode");
    setIsNightMode(!isNightMode);
  };

  return (
    <div className="app">
      <div>
        <button className="top-right-button" onClick={toggleMode}>
          {isNightMode ? "Night Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default App;
