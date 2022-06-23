import React, { useState, useEffect } from "react";

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORT CSS
import "./App.css";

// IMPORT OUTER
import AOS from "aos";

// Components
import Navbar from "./Components/Navbar";
import Content from "./Components/Content/Content";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Page404 from "./Components/Page404/Page404";
import Transaction from "./Components/Transaction/Transaction";

// ZUSTAND
import useLoginStore from "./store/loginAuth";

function App() {
  const { loadResident, isAuthenticated } = useLoginStore((state) => state);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    loadResident();
  }, [isAuthenticated]);

  return (
    <Router>
      <Navbar showNav={showNav} setShowNav={setShowNav} />
      <Routes>
        <Route index path="/" element={<Content />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
