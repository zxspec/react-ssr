import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import OtherPage from "./pages/OtherPage";

export default () => (
  <div>
    <Route path="/other" component={OtherPage} />
    <Route exact path="/" component={HomePage} />
  </div>
);
