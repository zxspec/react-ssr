import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "../../client/Routes";

export default ({ chunkExtractor, location, store }) => {
  const jsx = chunkExtractor.collectChunks(
    <Provider store={store}>
      <StaticRouter location={location}>
        <Routes />
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
        </body>
        </html>
    `;
};
