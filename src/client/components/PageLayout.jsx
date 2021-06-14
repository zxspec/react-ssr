import React from "react";

import Header from "./Header";
import { renderRoutes } from "react-router-config";

import "./PageLayout.css";

export default ({ route }) => (
  <div className="content">
    <Header />
    <main>{renderRoutes(route.routes)}</main>
  </div>
);
