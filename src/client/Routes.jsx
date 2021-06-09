import React from "react";
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";

const HomePage = loadable(() => import("./pages/HomePage"));
const FilmsPage = loadable(() => import("./pages/FilmsPage"));
const CharactersPage = loadable(() => import("./pages/CharactersPage"));

export default () => (
  <Switch>
    <Route path="/films" component={FilmsPage} />
    <Route path="/people" component={CharactersPage} />
    <Route exact path="/" component={HomePage} />
  </Switch>
);
