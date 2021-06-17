import React from "react";

export default ({ character }) => {
  const { name, gender, age, films } = character;

  return (
    <>
      <h1>
        {name} ({gender}, {age})
      </h1>
    </>
  );
};
