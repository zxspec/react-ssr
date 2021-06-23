import {
  extractFilmIds,
  extractCharacterIds,
  getFilmsShortData,
  getCharactersShortData,
  listToDict,
} from "./utils";

export const ADD_FILMS = "ADD_FILMS";
export const FETCH_FILMS = "FETCH_FILMS";
export const FETCH_FILM_DETAILS = "FETCH_FILM_DETAILS";
export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_CHARACTER_DETAILS = "FETCH_CHARACTER_DETAILS";

export const fetchFilms = () => async (dispatch, getState, api) => {
  const { films } = getState();
  if (films?.length) return;

  const { data } = await api.get("/films?fields=id,title");
  const filmsData = data.reduce((acc, film) => {
    acc[film.id] = film;
    return acc;
  }, {});

  dispatch({
    type: FETCH_FILMS,
    payload: { data: filmsData },
  });
};

export const fetchFilmDetails = (id) => async (dispatch, getState, api) => {
  const { filmDetails, characters } = getState();
  if (filmDetails?.[id]) return;
  const { data } = await api.get(`/films/${id}`);

  const characterIds = extractCharacterIds(data.people);
  const { existingCharacters, fetchedCharacters } =
    await getCharactersShortData({
      api,
      characterIds,
      characters,
    });

  data.characters = [...existingCharacters, ...fetchedCharacters];

  dispatch({
    type: FETCH_FILM_DETAILS,
    payload: { data },
  });
  // TODO add fetched characters to store
};

export const fetchCharacters = () => async (dispatch, getState, api) => {
  const { characters } = getState();
  if (characters?.length) return;

  const { data } = await api.get("/people?fields=id,name");
  const charactersData = data.reduce((acc, character) => {
    acc[character.id] = character;
    return acc;
  }, {});

  dispatch({
    type: FETCH_CHARACTERS,
    payload: { data: charactersData },
  });
};

export const fetchCharacterDetails =
  (id) => async (dispatch, getState, api) => {
    const { characterDetails, films } = getState();
    if (characterDetails?.[id]) return;

    const { data } = await api.get(`/people/${id}`);

    const filmIds = extractFilmIds(data.films);

    const { existingFilms, fetchedFilms } = await getFilmsShortData({
      api,
      filmIds,
      films,
    });
    data.films = [...existingFilms, ...fetchedFilms];

    await dispatch({
      type: FETCH_CHARACTER_DETAILS,
      payload: { data },
    });

    // TODO add fetched films to store
    if (fetchedFilms.length) {
      dispatch({
        type: ADD_FILMS,
        payload: { data: listToDict(fetchedFilms) },
      });
    }
  };
