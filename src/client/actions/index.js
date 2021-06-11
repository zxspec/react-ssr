export const FETCH_FILMS = "FETCH_FILMS";
export const fetchFilms = () => async (dispatch, getState, api) => {
  const { data } = await api.get("/films");

  dispatch({
    type: FETCH_FILMS,
    payload: { data },
  });
};
