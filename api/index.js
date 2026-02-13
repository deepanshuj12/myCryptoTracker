const express = require("express");
const cors = require("cors");
require("dotenv").config();

const dbConnection = require("./dbConnection");
dbConnection();
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);


app.use("/api/v1", require("./routes/routes"));

app.get("/", (req, res) => {
  res.send("Hi..");
});

module.exports = app;
