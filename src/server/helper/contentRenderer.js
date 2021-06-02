import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../client/App";

export default (chunkExtractor) => {
  const jsx = chunkExtractor.collectChunks(<App />);

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
            <h1>🔥 SSR 🔥</h1>
            <div id="react-root">${content}</div>
            ${scriptTags}
        </body>
        </html>
    `;
};
