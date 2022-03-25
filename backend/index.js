const express = require("express");

require("dotenv").config();
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});
require("./app/routes/aux.routes")(app);

app.get("/", (req, res) => {
  res.send("Hola");
});

const db = require("./app/models");
db.mongoose.connect(process.env.URI, () => {
  try {
    console.log("Connected to mongoDB");
  } catch (err) {
    console.log(err);
  }
});
