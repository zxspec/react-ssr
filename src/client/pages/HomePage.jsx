import React from "react";

import PageLayout from "../components/PageLayout";
import logo from "../img/Studio_Ghibli_logo.svg";

import "./HomePage.css";

export default () => (
  <PageLayout>
    <a href="https://www.ghibli.jp/">
      <img src={logo} alt="STUDIO GHIBLI" />
    </a>
    <p className="main-page-text">
      Thanks for the{" "}
      <a href="https://ghibliapi.herokuapp.com/">free public API</a>
    </p>
  </PageLayout>
);
