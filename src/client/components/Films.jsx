import React from "react";

export default ({ films }) => (
  <>
    <h1>Studio Ghibli Films</h1>
    <ul>
      {films.map((film, idx) => (
        <li key={idx}>{film.title}</li>
      ))}
    </ul>
  </>
);
