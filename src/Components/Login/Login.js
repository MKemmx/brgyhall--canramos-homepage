import React, { useState } from "react";

import "./LoginCSS.css";

// Component
import Footer from "../Footer";

const Login = () => {
  const initialLoginState = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialLoginState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (userData.email === "") {
      return alert("Please enter email");
    }
    if (userData.email === "") {
      return alert("Please enter password");
    }

    setUserData(initialLoginState);
  };

  return (
    <div>
      <section className="login">
        <div className="login-container">
          {/* SK IMAGE */}
          <div className="sk-image-container">
            <h2 className="login-page-title animate__animated animate__rubberBand animate__delay-0.7s">
              Canramos Login Page
            </h2>
            <img
              alt="login-logo"
              id="login-image"
              className="animate__animated animate__bounce animate__delay-0.5s"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Sangguniang_Kabataan_logo.svg/2048px-Sangguniang_Kabataan_logo.svg.png"
            />
          </div>
          {/* HOME TEXT */}
          <div data-aos="fade-left" data-aos-duration="1800">
            <form className="login-form" action="">
              <div className="login-title">Log In</div>
              <input
                className="login-input"
                onChange={handleChange}
                value={userData.email}
                name="email"
                type="text"
                placeholder="Enter your email"
              />
              <input
                className="login-input"
                onChange={handleChange}
                value={userData.password}
                name="password"
                type="password"
                placeholder="Enter your Password"
              />
              <button onClick={handleLogin} className="login-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
