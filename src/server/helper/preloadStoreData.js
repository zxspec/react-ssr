import { matchRoutes } from "react-router-config";

export default (store, routesConfig, location) => {
  const promises = matchRoutes(routesConfig, location).map(({ route, match }) =>
    route.loadData?.(store, match.params)
  );

  return Promise.all(promises);
};
