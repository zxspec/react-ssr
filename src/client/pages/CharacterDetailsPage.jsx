import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchCharacterDetails } from "../store/actions";
import CharacterDetails from "../components/CharacterDetails";

const component = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const characterDetails = useSelector((state) => state.characterDetails[id]);

  useEffect(() => {
    if (window.INITIAL_STATE?.characterDetails) {
      window.INITIAL_STATE.characterDetails = undefined;
    } else {
      dispatch(fetchCharacterDetails(id));
    }
  }, []);

  return characterDetails ? (
    <CharacterDetails characterDetails={characterDetails} />
  ) : (
    <h1>No character with id: {id}</h1>
  );
};

const loadData = (store, { id }) => store.dispatch(fetchCharacterDetails(id));

export default {
  component,
  loadData,
};
