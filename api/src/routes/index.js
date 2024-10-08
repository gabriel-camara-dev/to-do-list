const Router = require("express")

const taskRoutes = require("./task.routes")

const router = Router()

router.use('/tasks', taskRoutes)

module.exports = { router }