// build your server here
const express = require("express");
const resource = require("./project/router");
const task = require("./resource/router");
const project = require("./task/router");


const server = express();

server.use(express.json());
server.use("/task", task)
server.use("/resource", resource)
server.use("/project", project)

module.exports = server;