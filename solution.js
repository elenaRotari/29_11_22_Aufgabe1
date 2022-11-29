import express, { request, response } from "express";
import { db } from "./db.js";
const app = express();

app.get("/users", (req, res) => {
  const user = db.find((el) => el.first_name === req.query.name);

  if (user) {
    res.status(200).send(user);
  } else {
    res.status(200).send(db);
  }
});

app.get("/users/:id", (req, res) => {
  const user = db.find((el) => el.id === +req.params.id);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send(" user not found");
  }
});
app.listen(3002, () => {
  console.log(" hey i am running on port 3002");
});
