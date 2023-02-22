const express = require("express");
const path = require("path");

const port = 5500;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/contact", (request, response) => {
  if (!request.body.name) {
    return response.status(400).send("Name is required");
  }

  return response.status(201).send(`Thank you ${request.body.name}`);
});

app.post("/login", (request, response) => {
  if (!request.header("x-auth-token")) {
    return response.status(400).send("No Token");
  }

  if (request.header("x-auth-token") !== "123456") {
    return response.status(401).send("Not authorized");
  }

  return response.send("Logged in");
});

app.delete("/post/:id", (request, response) => {
  return response.json({
    message: `Post ${request.params.id} deleted`,
  });
});

app.put("/post/:id", (request, response) => {
  return response.json({
    id: request.params.id,
    title: request.body.title,
  });
});

app.listen(5500, () => console.log(`Listening on port ${port}`));
