const cors = require('cors')
const express = require('express') 
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send("<h1>Welcome to CRM backend!</h1>")
})

app.listen(port, () => {
    console.log(`Server is running in ${port} port`)
})
 