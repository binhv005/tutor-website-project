const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Running success");
});

app.listen(3000);
