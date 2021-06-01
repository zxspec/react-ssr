import React from "react";
import loadable from "@loadable/component";

const A = loadable(() => import("./components/A"));
const B = loadable(() => import("./components/B"));
import C from "./components/C";

import "./App.css";

const App = () => (
  <div>
    <h1>Hello from React App!</h1>
    <A />
    <B />
    <C />
  </div>
);

export default App;
