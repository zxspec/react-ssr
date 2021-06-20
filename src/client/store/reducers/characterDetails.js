import { FETCH_CHARACTER_DETAILS } from "../actions/index";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_DETAILS:
      const { data } = action.payload;
      const { id } = data;
      return { ...state, [id]: data };
    default:
      return state;
  }
};
