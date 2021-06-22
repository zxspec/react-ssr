import {
  extractFilmIds,
  extractCharacterIds,
  getFilmsShortData,
} from "./utils";

export const FETCH_FILMS = "FETCH_FILMS";
export const FETCH_FILM_DETAILS = "FETCH_FILM_DETAILS";
export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_CHARACTER_DETAILS = "FETCH_CHARACTER_DETAILS";

export const fetchFilms = () => async (dispatch, getState, api) => {
  const { films } = getState();
  if (films?.length) return;

  const { data } = await api.get("/films?fields=id,title");

  dispatch({
    type: FETCH_FILMS,
    payload: { data },
  });
};

export const fetchFilmDetails = (id) => async (dispatch, getState, api) => {
  const { filmDetails } = getState();
  if (filmDetails?.[id]) return;

  const { data } = await api.get(`/films/${id}`);

  const characterIds = extractCharacterIds(data.people);

  data.characters = await getCharactersShortData(api, characterIds);

  dispatch({
    type: FETCH_FILM_DETAILS,
    payload: { data },
  });
};

export const fetchCharacters = () => async (dispatch, getState, api) => {
  const { characters } = getState();
  if (characters?.length) return;

  // TODO skip next step for the characters already in store
  const { data } = await api.get("/people?fields=id,name");

  dispatch({
    type: FETCH_CHARACTERS,
    payload: { data },
  });

  // TODO add found characters to store
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

    // TODO add  fetched films to store
  };

async function getCharactersShortData(api, characterIds) {
  if (!characterIds?.length) return [];

  const charactersDataRequests = characterIds.map((id) =>
    api.get(`/people/${id}?fileds=id,name`)
  );
  const responses = await Promise.all(charactersDataRequests);

  return responses.map((c) => c.data);
}
