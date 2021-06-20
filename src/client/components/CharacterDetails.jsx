import React from "react";

export default ({ character }) => {
  const { name, gender, age, films } = character;

  return (
    <>
      <h1>{name}</h1>

      <p>
        <h2>Gender: {gender}</h2>
        <h2>Age: {age}</h2>
        <h2>Films:</h2>
        <ul>
          {films.map((film) => (
            <li key={film.id}>
              <a href={`/films/${film.id}`}>{film.title}</a>
            </li>
          ))}
        </ul>
      </p>
    </>
  );
};
