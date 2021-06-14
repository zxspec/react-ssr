import React from "react";

import logo from "../img/Studio_Ghibli_logo.svg";

import "./HomePage.css";

export default () => (
  <>
    <a href="https://www.ghibli.jp/">
      <img src={logo} alt="STUDIO GHIBLI" />
    </a>
    <p className="main-page-text">
      Thanks for the{" "}
      <a href="https://ghibliapi.herokuapp.com/">free public API</a>
    </p>
  </>
);
