import React from "react";
import { Link } from "react-router-dom";

export default ({ films }) => {
  const filmIds = Object.keys(films);

  return (
    <>
      <h1>Studio Ghibli Films</h1>
      <ul>
        {filmIds.map((id) => (
          <li key={id}>
            <Link to={`/films/${id}`}>{films[id].title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
