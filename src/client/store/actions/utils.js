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
  const filmIdsToFetch = [];

  const existingFilms = films.filter((film) => {
    if (ids.includes(film.id)) return true;
    filmIdsToFetch.push(film);
  });

  const filmsDataRequests = filmIds.map((id) =>
    api.get(`${FILMS_PATH}/${id}?fileds=id,title`)
  );
  const fetchedFilmsData = await Promise.all(filmsDataRequests);
  const fetchedFilms = fetchedFilmsData.map((f) => f.data);

  return { existingFilms, fetchedFilms };
}
