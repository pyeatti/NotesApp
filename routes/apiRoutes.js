let db = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(db);
  });

  app.post("/api/notes", function (req, res) {
    let userNote = req.body;
    db.push(req.body);
    userNote.id = uuidv4();

    fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
      if (err) {
        throw err;
      }
      res.json(userNote);
    });
  });

  app.delete("/api/notes/:id", (req, res) => {
    let deleteUserNote = req.params.id;
    db = db.filter((userNote) => userNote.id !== deleteUserNote);

    fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
      if (err) {
        throw err;
      }
      res.json(true);
    });
  });
};
