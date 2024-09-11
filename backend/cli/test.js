const fs = require('fs')

let name = 'tim'
let bigName = name[0].toUpperCase() + name.substring(1)

const dirs = [`../routers/${name}Router.js`, `../controllers/${name}Controller.js`, `../services/${name}Service.js`]
const files = [`const Router = require('express')
const ${name}Controller = require('../controllers/${name}Controller.js')
const ${name}Router = new Router()

${name}Router.get('/', ${name}Controller.name)

module.exports = ${name}Router
`, `
const ${bigName}Service = require('../services/${bigName}Service.js')
class ${bigName}Controller {
    async name(req, res) {
        try {
            const test = ${bigName}Service.test()

            res.json({"message":"test"})
        } catch (error) {
           console.log(error) 
        }
    }
}

module.exports = new ${bigName}Controller`, `
class ${bigName}Service {
    async name(body) {
        try {
            const test = body

            return test
        } catch (error) {
           console.log(error) 
        }
    }
}

module.exports = new ${bigName}Service 
`]

for (let i = 0; i < files.length; i++) {
    fs.writeFileSync(
        dirs[i],
        files[i],
        'utf-8'
    )
}

