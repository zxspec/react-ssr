import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchFilms } from "../store/actions";
import FilmDetails from "../components/FilmDetails";

const component = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const film = useSelector((state) =>
    state.films.find((film) => film.id === id)
  );

  useEffect(() => {
    if (window.INITIAL_STATE?.films) {
      window.INITIAL_STATE.films = undefined;
    } else {
      dispatch(fetchFilms());
    }
  }, []);

  return film ? (
    <>
      <FilmDetails film={film} />
    </>
  ) : null;
};

const loadData = (store) => store.dispatch(fetchFilms());

export default {
  component,
  loadData,
};
