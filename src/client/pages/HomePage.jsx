import React from "react";

import Header from "../components/Header";
import logo from "../img/Studio_Ghibli_logo.svg";
import "./HomePage.css";

export default () => (
  <div className="content">
    <Header />
    <main>
      <a href="https://www.ghibli.jp/">
        <img className="logo" src={logo} alt="STUDIO GHIBLI" />
      </a>
      <p></p>
      <p>
        Thanks for the{" "}
        <a href="https://ghibliapi.herokuapp.com/">free public API</a>
      </p>
    </main>
  </div>
);
