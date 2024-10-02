
const Router = require('express')
const run.jsController = require('../controllers/run.jsController.js')
const run.jsRouter = new Router()

run.jsRouter.get('/', run.jsController.name)

module.exports = run.jsRouter
    