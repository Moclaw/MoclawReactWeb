import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
