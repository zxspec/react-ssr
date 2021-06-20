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

  dispatch({
    type: FETCH_FILM_DETAILS,
    payload: { data },
  });
};

export const fetchCharacters = () => async (dispatch, getState, api) => {
  const { characters } = getState();
  if (characters?.length) return;

  const { data } = await api.get("/people?fields=id,name");

  dispatch({
    type: FETCH_CHARACTERS,
    payload: { data },
  });
};

export const fetchCharacterDetails =
  (id) => async (dispatch, getState, api) => {
    const { characterDetails } = getState();
    if (characterDetails?.[id]) return;

    const { data } = await api.get(`/people/${id}`);

    const filmIds = extractFilmIds(data.films);

    // TODO skip next step for the films already in store
    data.films = await getFilmsShortData(api, filmIds);

    await dispatch({
      type: FETCH_CHARACTER_DETAILS,
      payload: { data },
    });
    // TODO add found films to store
  };

function extractFilmIds(filmUrls) {
  const FILMS_PATH = "/films/";

  return filmUrls.map((filmUrl) => {
    const pos = filmUrl.lastIndexOf(FILMS_PATH) + FILMS_PATH.length;
    return filmUrl.substr(pos);
  });
}

async function getFilmsShortData(api, filmIds) {
  if (!filmIds?.length) return [];

  const filmsDataRequests = filmIds.map((id) =>
    api.get(`/films/${id}?fileds=id,title`)
  );
  const responses = await Promise.all(filmsDataRequests);

  return responses.map((f) => f.data);
}
