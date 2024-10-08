const { Task } = require("../models/models");

async function taskExists(req, res, next) {
     try {
          const { id } = req.params.id
          const task = await Task.findOne(id)

          if(!task) {
               return res.status(404).json({ error: 'Tarefa não encontrada'})
          }

          req.task = task

          return next()
     } catch (error) {
          return res.status(500).json({ error: 'Erro ao checar se tarefa existe!' });
     }
}

module.exports = taskExists 