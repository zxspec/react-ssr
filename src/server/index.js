import express from "express";

const PORT = process.env.PORT || 9999;

const app = express();

app.listen(PORT, () => console.log(`Server started http://localhost:${PORT}`));
