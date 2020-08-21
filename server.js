//
const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

//
const app = express();
const PORT = process.env.PORT || 3000;

//
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

//
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
