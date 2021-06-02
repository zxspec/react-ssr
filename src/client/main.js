import React from "react";
import ReactDom from "react-dom";
import { loadableReady } from "@loadable/component";

import App from "./App";

loadableReady(() => {
  ReactDom.hydrate(<App />, document.getElementById("react-root"));
});
