const express = require("express");
const helmet = require("helmet");
const db = require("./database/databaseHelpers");
const server = express();

server.use(helmet());
server.use(express.json());

/*
route: '/api/dishes/'
method: Get
returns: [] dieshes in sqlite3 database
*/

server.get("/api/dishes", async (req, res) => {
  try {
    const data = await db.getDish();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ err, message: "Internal Server Error" });
  }
});

/*
route: '/api/dishes/:id'
method: Get
returns: [] dishes with recipes in sqlite3 database
getDish() takes optional id parameter and returns dishes and list of recipes
*/

server.get("/api/dishes/:id", async (req, res) => {
  try {
    const data = await db.getDish(req.params.id);
    console.log(data);
    if (data.length === 0) {
      res.status(404).json({ message: "ID not found" });
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ err, message: "Internal Server Error" });
  }
});

/*
route: '/api/recipes'
method: Get
returns: [] of recipes in sqlite3 database
*/

server.get("/api/recipes", async (req, res) => {
  try {
    const data = await db.getRecipes();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ err, message: "Internal Server Error" });
  }
});

module.exports = server;
