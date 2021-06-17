import PageLayout from "./components/PageLayout";

import HomePage from "./pages/HomePage";
import FilmsPage from "./pages/FilmsPage";
import FilmDetailsPage from "./pages/FilmDetailsPage";
import CharactersPage from "./pages/CharactersPage";

// import loadable from "@loadable/component";

// const HomePage = loadable(() => import("./pages/HomePage"));
// const FilmsPage = loadable(() => import("./pages/FilmsPage"));
// const CharactersPage = loadable(() => import("./pages/CharactersPage"));

export default [
  {
    component: PageLayout,
    routes: [
      {
        path: "/",
        exact: true,
        component: HomePage,
      },
      {
        ...FilmsPage,
        exact: true,
        path: "/films",
      },
      {
        ...FilmDetailsPage,
        path: "/films/:id",
      },
      {
        ...CharactersPage,
        path: "/people",
      },
    ],
  },
];
