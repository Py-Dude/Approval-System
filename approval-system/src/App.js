import ToggleMode from "./Components/ToggleMode/ToggleMode";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<ToggleMode />} />

        </Routes>
      </Router>
    </>
  );
};

export default App;
