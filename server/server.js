const express = require("express");
const helmet = require("helmet");
const db = require("./database/databaseHelpers");
const server = express();

server.use(helmet());
server.use(express.json());

server.get("/api/dishes", async (req, res) => {});

module.exports = server;
