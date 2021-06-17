import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../../client/store/reducers";

export default () => {
  const axiosInstance = axios.create({
    baseURL: "https://ghibliapi.herokuapp.com",
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );

  return store;
};
