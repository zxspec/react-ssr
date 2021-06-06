import React from "react";
import ReactDom from "react-dom";
import { loadableReady } from "@loadable/component";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";

loadableReady(() => {
  ReactDom.hydrate(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
    document.getElementById("react-root")
  );
});
