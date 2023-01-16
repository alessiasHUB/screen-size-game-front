import React from "react";
import Game from "./components/Game";
import Navbar from "./components/Navbar";
import Rules from "./components/Rules";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
