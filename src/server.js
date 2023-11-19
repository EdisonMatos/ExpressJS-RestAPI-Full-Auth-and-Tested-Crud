const express = require("express");

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send({
    message: "Server is runing",
  });
});

module.exports = app;
