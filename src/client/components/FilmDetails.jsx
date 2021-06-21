import React from "react";

export default ({ filmDetails }) => {
  const { title, original_title, release_date, description, characters } =
    filmDetails;

  return (
    <>
      <div></div>

      <h1>
        {title} ({original_title})
      </h1>
      <div>
        <h2>Release Date: {release_date}</h2>
        <h2>Characters:</h2>
        <p>{description}</p>
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <a href={`/people/${character.id}`}>{character.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
