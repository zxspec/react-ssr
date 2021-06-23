import React from "react";
import { Link } from "react-router-dom";

export default ({ films }) => {
  const ids = Object.keys(films);

  return (
    <>
      <h1>Studio Ghibli Films</h1>
      <ul>
        {ids.map((id) => (
          <li key={id}>
            <Link to={`/films/${id}`}>{films[id].title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
