const { Task } = require("../models/models");

async function createTask(req, res) {
     try {
          const {name, description, prazo, horario} = req.body
          const task = await Task.create({name, description, prazo, horario})

          return res.status(201).json(task.toJSON())
     } catch (error) {
          console.log(error)
          return res.status(500).json({ error: 'Erro ao criar tarefa'})
     }
}

async function getTasks(req, res) {
     try {
          const tasks = await Task.findAll()

          return res.status(200).json(tasks)
     } catch (error) {
          return res.status(500).json({ error: 'Erro ao listar tarefas'})
     }
}

async function patchTask(req, res) {
     try {
          const task = req.task
          const description = req.body.description

          task.description = description
          await task.save()

          return res.status(200).json(task.toJSON())
     } catch (error) {
          return res.status(500).json({ error: 'Erro ao editar tarefa'})
     }
}

async function deleteTask(req, res) {
     try {
          const task = req.task
          await task.destroy()

          return res.status(204).send()
     } catch (error) {
          return res.status(500).json({ error: 'Erro ao deletar tarefa'})
     }  
}

module.exports = {
     createTask,
     getTasks,
     patchTask,
     deleteTask
}