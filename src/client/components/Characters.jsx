import React from "react";
import { Link } from "react-router-dom";

export default ({ characters }) => {
  const ids = Object.keys(characters);

  return (
    <>
      <h1>Studio Ghibli Characters</h1>
      <ul>
        {ids.map((id) => (
          <li key={id}>
            <Link to={`/people/${id}`}>{characters[id].name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
