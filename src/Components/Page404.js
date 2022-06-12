import React from "react";

import { useNavigate } from "react-router-dom";

import "./Page404CSS.css";

const Page404 = () => {
  let navigate = useNavigate();

  return (
    <section class="page-404">
      <div className="page-404-container">
        <h1 className="page-404-text"> 404 </h1>
        <div className="four_zero_four_bg"></div>
        <div className="footer-404">
          <p className="page-404-text-title"> Looks like you're lost</p>
          <p className="page-404-text-p">
            The page you are looking for is not avaible!
          </p>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="page-404-btn"
          >
            HOMEPAGE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page404;
