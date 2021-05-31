import path from "path";
import express from "express";
import contentRenderer from "./helper/contentRenderer";

const PORT = process.env.PORT || 9999;

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("*", (_, res) => {
  const content = contentRenderer();

  res.set("content-type", "text/html");
  res.send(content);
});

app.listen(PORT, () => console.log(`Server started http://localhost:${PORT}`));
