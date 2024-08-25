import express, {Application, Request, Response} from "express"
import bodyParser from "body-parser"
const app: Application = express()
import cors from "cors"
import cookieParser from "cookie-parser"



app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

app.get("/", (req: Request, res: Response) => {
    res.send("server is up and running")
})

export default app