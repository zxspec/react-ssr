import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchFilms } from "../store/actions";
import Films from "../components/Films";

const component = () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films) ?? [];

  useEffect(() => {
    if (window.INITIAL_STATE?.films?.length > 0) {
      window.INITIAL_STATE.films = undefined;
    } else {
      dispatch(fetchFilms());
    }
  }, []);

  return <Films films={films} />;
};

const loadData = (store) => store.dispatch(fetchFilms());

export default {
  component,
  loadData,
};
