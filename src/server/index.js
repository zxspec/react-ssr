import path from "path";
import express from "express";
import { ChunkExtractor } from "@loadable/server";
import { createProxyMiddleware } from "http-proxy-middleware";

import contentRenderer from "./helper/contentRenderer";
import createStore from "./helper/createStore";
import routesConfig from "../client/routesConfig";
import preloadStoreData from "./helper/preloadStoreData";

const PORT = process.env.PORT || 9999;

const app = express();

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://ghibliapi.herokuapp.com",
    pathRewrite: { "^/api": "/" },
    changeOrigin: true,
  })
);
app.use(express.static(path.join(__dirname, "../public")));

const statsFile = path.resolve(
  path.join(__dirname, "../build/loadable-stats.json")
);
const extractor = new ChunkExtractor({ statsFile });

app.get("*", async (req, res) => {
  const store = createStore();

  try {
    await preloadStoreData(store, routesConfig, req.path);
  } catch (err) {
    // TODO add propererror handling
    console.error("### err: ", err);
  }

  const content = contentRenderer({
    chunkExtractor: extractor,
    location: req.path,
    store,
  });

  res.set("content-type", "text/html");
  res.send(content);
});

app.listen(PORT, () => console.log(`Server started http://localhost:${PORT}`));
