import dotenv from 'dotenv'
import express, {Express, Request, Response} from 'express'
import cors from 'cors'

dotenv.config()

const app: Express = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 8080

app.get('/', (req: Request, res: Response) => {
    res.send("<h1>Welcome to CRM backend!</h1>")
})

app.listen(port, () => {
    console.log(`Server is running in ${port} port`)
})
 