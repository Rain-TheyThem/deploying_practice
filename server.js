const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

// set pug as view engine
app.set("view engine", "pug")

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});