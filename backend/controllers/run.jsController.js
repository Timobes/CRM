
const Run.jsService = require('../services/Run.jsService.js')
class Run.jsController {
    async name(req, res) {
        try {
            const test = Run.jsService.test()

            res.json({"message":"test"})
        } catch (error) {
            console.log(error) 
        }
    }
}

module.exports = new Run.jsController