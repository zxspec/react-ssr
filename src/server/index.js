import path from "path";
import express from "express";
import { ChunkExtractor } from "@loadable/server";

import contentRenderer from "./helper/contentRenderer";

const PORT = process.env.PORT || 9999;

const app = express();

app.use(express.static(path.join(__dirname, "../public")));
const statsFile = path.resolve(
  path.join(__dirname, "../build/loadable-stats.json")
);
const extractor = new ChunkExtractor({ statsFile });

app.get("*", (req, res) => {
  const content = contentRenderer({
    chunkExtractor: extractor,
    location: req.path,
  });

  res.set("content-type", "text/html");
  res.send(content);
});

app.listen(PORT, () => console.log(`Server started http://localhost:${PORT}`));
