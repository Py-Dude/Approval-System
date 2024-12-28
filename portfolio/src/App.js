import ToggleMode from "./Components/ToggleMode/ToggleMode";
<<<<<<< Updated upstream
=======
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
>>>>>>> Stashed changes

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      <ToggleMode />
    </>
  );
};

export default App;
