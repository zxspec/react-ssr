export const FETCH_FILMS = "FETCH_FILMS";
export const fetchFilms = () => async (dispatch) => {
  dispatch({
    type: FETCH_FILMS,
    payload: { data: fakeFilmsLIst },
  });
};

const fakeFilmsLIst = [
  {
    id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    title: "Castle in the Sky",
    original_title: "天空の城ラピュタ",
    original_title_romanised: "Tenkū no shiro Rapyuta",
    description:
      "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    director: "Hayao Miyazaki",
    producer: "Isao Takahata",
    release_date: "1986",
    running_time: "124",
    rt_score: "95",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url: "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe",
  },
  {
    id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
    title: "Grave of the Fireflies",
    original_title: "火垂るの墓",
    original_title_romanised: "Hotaru no haka",
    description:
      "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
    director: "Isao Takahata",
    producer: "Toru Hara",
    release_date: "1988",
    running_time: "89",
    rt_score: "97",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url: "https://ghibliapi.herokuapp.com/films/12cfb892-aac0-4c5b-94af-521852e46d6a",
  },
];
