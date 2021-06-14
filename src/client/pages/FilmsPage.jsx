import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchFilms } from "../actions";
import Films from "../components/Films";

export default () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films);

  useEffect(() => dispatch(fetchFilms()), []);

  return <Films films={films} />;
};
