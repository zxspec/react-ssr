import { combineReducers } from "redux";

import filmsReducer from "./filmsReducer";
import charactersReducer from "./charactersReducer";

export default combineReducers({
  films: filmsReducer,
  characters: charactersReducer,
});
