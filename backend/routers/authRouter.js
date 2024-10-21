
const Router = require('express')
const authController = require('../controllers/authController.js')
const authRouter = new Router()

authRouter.get('/', authController.name)

module.exports = authRouter
    