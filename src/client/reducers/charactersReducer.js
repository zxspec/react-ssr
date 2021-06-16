import { FETCH_CHARACTERS } from "../actions/index";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return action.payload.data;
    default:
      return state;
  }
};
