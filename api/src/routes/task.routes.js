const express = require("express");

//Controller
const taskController = require("../controllers/taskController");

const taskRoutes = express.Router();

//Middlewares
const taskExists = require("../middlewares/taskExists")
const formatarData = require("../middlewares/formatarData")
const formatarHorario = require("../middlewares/formatarHorario")

taskRoutes.post("/", formatarData, formatarHorario, (req, res) => taskController.createTask(req, res));
taskRoutes.get("/", (req, res) => taskController.getTasks(req, res));
taskRoutes.patch('/:id', taskExists, (req, res) => taskController.patchTask(req, res));
taskRoutes.delete('/:id', taskExists, (req, res) => taskController.deleteTask(req, res));

module.exports = taskRoutes