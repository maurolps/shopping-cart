import express from "express";
import shoes from "./mockShoes";

const app = express();
const port = 3000;
const shoesRoute = "/shoes";

app.use(express.json());

app.get(shoesRoute, (req, res) => {
  res.status(200).json(shoes);
});

app.listen(port, () => {
  console.log(
    `GET request server started at http://localhost:${port}${shoesRoute}`
  );
});
