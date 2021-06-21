import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchFilms, fetchFilmDetails } from "../store/actions";
import FilmDetails from "../components/FilmDetails";

const component = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const filmDetails = useSelector((state) => state.filmDetails[id]);

  useEffect(() => {
    if (window.INITIAL_STATE?.fetchFilmDetails) {
      window.INITIAL_STATE.fetchFilmDetails = undefined;
    } else {
      dispatch(fetchFilmDetails(id));
    }
  }, []);

  return filmDetails ? (
    <>
      <FilmDetails filmDetails={filmDetails} />
    </>
  ) : null;
};

const loadData = (store) => store.dispatch(fetchFilms());

export default {
  component,
  loadData,
};
