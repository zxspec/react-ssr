import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchCharacters } from "../actions";
import CharacterDetails from "../components/CharacterDetails";

const component = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector((state) =>
    state.characters.find((character) => character.id === id)
  );

  useEffect(() => {
    if (window.INITIAL_STATE?.characters) {
      window.INITIAL_STATE.characters = undefined;
    } else {
      dispatch(fetchCharacters());
    }
  }, []);

  return character ? <CharacterDetails character={character} /> : null;
};

const loadData = (store) => store.dispatch(fetchCharacters());

export default {
  component,
  loadData,
};
