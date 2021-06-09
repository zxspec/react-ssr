import React from "react";

import Header from "./Header";

import "./PageLayout.css";

export default ({ children }) => (
  <div className="content">
    <Header />
    <main>{children}</main>
  </div>
);
