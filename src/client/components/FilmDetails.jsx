import React from "react";

export default ({ film }) => {
  const { title, original_title, release_date, description } = film;

  return (
    <>
      <h1>
        {release_date} - {title} ({original_title})
      </h1>
      <p>{description}</p>
    </>
  );
};
