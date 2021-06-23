import { FETCH_FILMS } from "../actions/index";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_FILMS:
      return action.payload.data;
    default:
      return state;
  }
};
