import { FETCH_FILM_DETAILS } from "../actions/index";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_FILM_DETAILS:
      const {
        data: { id },
      } = action.payload;
      return { ...state, [id]: data };
    default:
      return state;
  }
};
