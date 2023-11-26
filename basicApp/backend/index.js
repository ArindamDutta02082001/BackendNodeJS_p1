import express from "express";
import data from "./jokes.js";
const app = express();

const port = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/jokes", (req, res) => {
  const jsonData = data;
  res.send(jsonData);
});

app.listen(port, () => {
  console.log(`listening in ${port}`);
});
