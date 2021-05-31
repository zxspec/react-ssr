import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../client/App";

export default () => {
  const content = renderToString(<App />);

  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="dist/main.css">
        </head>
        <body>
            <h1>🔥 SSR 🔥</h1>
            <div id="react-root">${content}</div>
            <script src="dist/bundle.js"></script>
        </body>
        </html>
    `;
};
