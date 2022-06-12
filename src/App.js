import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import AOS from "aos";

// Components
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Page404 from "./Components/Page404";

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
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
