import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCharacters } from "../store/actions";
import Characters from "../components/Characters";

const component = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters) ?? [];

  useEffect(() => {
    if (window.INITIAL_STATE?.characters?.length > 0) {
      window.INITIAL_STATE.characters = undefined;
    } else {
      dispatch(fetchCharacters());
    }
  }, []);

  return <Characters characters={characters} />;
};

const loadData = (store) => store.dispatch(fetchCharacters());

export default {
  component,
  loadData,
};
