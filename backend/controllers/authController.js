
const AuthService = require('../services/AuthService.js')
class AuthController {
    async name(req, res) {
        try {
            const test = AuthService.test()

            res.json({"message":"test"})
        } catch (error) {
            console.log(error) 
        }
    }
}

module.exports = new AuthController