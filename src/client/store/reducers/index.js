import { combineReducers } from "redux";

import filmsReducer from "./filmsReducer";
import filmDetailsReducer from "./filmDetails";
import charactersReducer from "./charactersReducer";
import characterDetailsReducer from "./characterDetails";

export default combineReducers({
  films: filmsReducer,
  filmDetails: filmDetailsReducer,
  characters: charactersReducer,
  characterDetails: characterDetailsReducer,
});
