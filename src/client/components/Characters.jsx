import React from "react";

export default ({ films: characters }) => (
  <>
    <h1>Studio Ghibli Characters</h1>
    <ul>
      {characters.map((character, idx) => (
        <li key={idx}>{character.name}</li>
      ))}
    </ul>
  </>
);
