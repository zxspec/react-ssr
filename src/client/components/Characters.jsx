import React from "react";
import { Link } from "react-router-dom";

export default ({ characters }) => (
  <>
    <h1>Studio Ghibli Characters</h1>
    <ul>
      {characters.map((character, idx) => (
        <li key={idx}>
          <Link to={`/people/${character.id}`}>{character.name}</Link>
        </li>
      ))}
    </ul>
  </>
);
