import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";

import routesConfig from "../../client/routesConfig";

export default ({ chunkExtractor, location, store }) => {
  const jsx = chunkExtractor.collectChunks(
    <Provider store={store}>
      <StaticRouter location={location}>
        {renderRoutes(routesConfig)}
      </StaticRouter>
    </Provider>
  );

  const content = renderToString(jsx);

  // You can also collect your "preload/prefetch" links
  //  const linkTags = chunkExtractor.getLinkTags() // or extractor.getLinkElements();

  const styleTags = chunkExtractor.getStyleTags(); // or extractor.getStyleElements();
  const scriptTags = chunkExtractor.getScriptTags(); // or extractor.getScriptElements();

  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            ${styleTags} 
        </head>
        <body>
            <div id="react-root">${content}</div>
            ${scriptTags}
            <script>
              window.INITIAL_STATE = ${serialize(store.getState())} 
          </script>
        </body>
        </html>
    `;
};
