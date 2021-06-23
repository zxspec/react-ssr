import { combineReducers } from "redux";

import films from "./films";
import filmDetails from "./filmDetails";
import characters from "./characters";
import characterDetails from "./characterDetails";

export default combineReducers({
  films,
  filmDetails,
  characters,
  characterDetails,
});
