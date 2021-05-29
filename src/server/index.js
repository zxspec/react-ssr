import path from "path";
import express from "express";

const PORT = process.env.PORT || 9999;

const app = express();

app.use(express.static(path.join(__dirname, "../../public")));

app.get("*", (_, res) => {
  res.set("content-type", "text/html");
  res.send(` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="dist/main.css">
    </head>
    <body>
        <h1>🔥SSR🔥</h1>
        <div id="react-root"></div>
        <script src="dist/bundle.js"></script>
    </body>
    </html>
`);
});

app.listen(PORT, () => console.log(`Server started http://localhost:${PORT}`));
