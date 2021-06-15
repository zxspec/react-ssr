import { matchRoutes } from "react-router-config";

export default (store, routesConfig, location) => {
  const promises = matchRoutes(routesConfig, location).map(({ route }) =>
    route.loadData?.(store)
  );

  return Promise.all(promises);
};
