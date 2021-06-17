import React from "react";
import { Link } from "react-router-dom";

export default ({ films }) => (
  <>
    <h1>Studio Ghibli Films</h1>
    <ul>
      {films.map((film, idx) => (
        <li key={idx}>
          <Link to={`/films/${film.id}`}>{film.title}</Link>
        </li>
      ))}
    </ul>
  </>
);
