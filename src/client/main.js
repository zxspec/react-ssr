import React from "react";
import ReactDom from "react-dom";
import { loadableReady } from "@loadable/component";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import Routes from "./Routes";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(thunk));

loadableReady(() => {
  ReactDom.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>,
    document.getElementById("react-root")
  );
});
