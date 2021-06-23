const FILMS_PATH = "/films";
const CHARACTERS_PATH = "/people";

export function extractFilmIds(filmUrls) {
  return filmUrls.map((filmUrl) => {
    const pos = filmUrl.lastIndexOf(FILMS_PATH + "/") + FILMS_PATH.length + 1;
    return filmUrl.substr(pos);
  });
}

export function extractCharacterIds(characterUrls) {
  return characterUrls.map((characterUrl) => {
    const pos =
      characterUrl.lastIndexOf(CHARACTERS_PATH + "/") +
      CHARACTERS_PATH.length +
      1;
    return characterUrl.substr(pos);
  });
}

export async function getFilmsShortData({ api, filmIds, films }) {
  const existingFilms = [];
  const filmIdsToFetch = [];

  filmIds.forEach((id) => {
    const film = films.find((f) => f.id === id);
    if (film) {
      existingFilms.push(film);
    } else {
      filmIdsToFetch.push(id);
    }
  });

  const filmsDataRequests = filmIdsToFetch.map((id) =>
    api.get(`${FILMS_PATH}/${id}?fileds=id,title`)
  );
  const fetchedFilmsData = await Promise.all(filmsDataRequests);
  const fetchedFilms = fetchedFilmsData.map((f) => f.data);

  return { existingFilms, fetchedFilms };
}

export async function getCharactersShortData({
  api,
  characterIds,
  characters,
}) {
  const existingCharacters = [];
  const characterIdsToFetch = [];

  characterIds.forEach((id) => {
    const character = characters.find((c) => c.id === id);
    if (character) {
      existingCharacters.push(character);
    } else {
      characterIdsToFetch.push(id);
    }
  });

  const charactersDataRequests = characterIdsToFetch.map((id) =>
    api.get(`${CHARACTERS_PATH}/${id}?fileds=id,name`)
  );
  const fetchedCharactersData = await Promise.all(charactersDataRequests);
  const fetchedCharacters = fetchedCharactersData.map((c) => c.data);

  return { existingCharacters, fetchedCharacters };
}
