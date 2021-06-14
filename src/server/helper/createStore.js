import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../../client/reducers";

export default () => {
  const axiosInstance = axios.create({
    baseURL: "http://react-ssr-api.herokuapp.com",
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );

  return store;
};
