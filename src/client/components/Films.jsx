import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchFilms } from "../actions";

export default () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films);
  useEffect(() => dispatch(fetchFilms()), []);

  return (
    <>
      <h1>Studio Ghibli Films</h1>
      <ul>
        {films.map((film, idx) => (
          <li key={idx}>{film.title}</li>
        ))}
      </ul>
    </>
  );
};
