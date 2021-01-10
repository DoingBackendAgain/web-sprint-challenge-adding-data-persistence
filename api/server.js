// build your server here
const express = require("express");
const resource = require("./resource/router");
const task = require("./task/router");
const project = require("./project/router");


const server = express();

server.use(express.json());
server.use("/task", task)
server.use("/resource", resource)
server.use("/project", project)

module.exports = server;