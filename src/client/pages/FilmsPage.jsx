import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchFilms } from "../actions";
import Films from "../components/Films";
import PageLayout from "../components/PageLayout";

export default () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films);
  useEffect(() => dispatch(fetchFilms()), []);

  return (
    <PageLayout>
      <Films films={films} />
    </PageLayout>
  );
};
