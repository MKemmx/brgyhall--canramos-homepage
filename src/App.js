import React, { useState, useEffect } from "react";

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORT CSS
import "./App.css";

// Components
import Navbar from "./Components/Navbar";
import Content from "./Components/Content/Content";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Page404 from "./Components/Page404/Page404";
import Transaction from "./Components/Transaction/Transaction";

// IMPORT OUTER
import AOS from "aos";

function App() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Navbar showNav={showNav} setShowNav={setShowNav} />
      <Routes>
        <Route index element={<Content />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
