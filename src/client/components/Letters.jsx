import React from "react";

import loadable from "@loadable/component";

const A = loadable(() => import("./A"));
const B = loadable(() => import("./B"));
import C from "./C";

export default () => (
  <div>
    <h1>Hello from React App!</h1>
    <A />
    <B />
    <C />
  </div>
);
