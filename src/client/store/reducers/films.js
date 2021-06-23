import { FETCH_FILMS, ADD_FILMS } from "../actions/index";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_FILMS:
      return action.payload.data;
    case ADD_FILMS:
      return { ...state, ...action.payload.data };
    default:
      return state;
  }
};
