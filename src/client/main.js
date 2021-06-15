import React from "react";
import ReactDom from "react-dom";
import { loadableReady } from "@loadable/component";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import axios from "axios";

import reducers from "./reducers";
import routesConfig from "./routesConfig";

const axiosInstance = axios.create({ baseURL: "/api" });

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

loadableReady(() => {
  ReactDom.hydrate(
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(routesConfig)}</BrowserRouter>
    </Provider>,
    document.getElementById("react-root")
  );
});
