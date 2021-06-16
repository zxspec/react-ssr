export const FETCH_FILMS = "FETCH_FILMS";
export const FETCH_CHARACTERS = "FETCH_CHARACTERS";

export const fetchFilms = () => async (dispatch, getState, api) => {
  const { data } = await api.get("/films");

  dispatch({
    type: FETCH_FILMS,
    payload: { data },
  });
};

export const fetchCharacters = () => async (dispatch, getState, api) => {
  const { data } = await api.get("/people");

  dispatch({
    type: FETCH_CHARACTERS,
    payload: { data },
  });
};
