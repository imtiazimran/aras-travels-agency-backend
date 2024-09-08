import express, {Application, Request, Response} from "express"
import bodyParser from "body-parser"
const app: Application = express()
import cors from "cors"
import cookieParser from "cookie-parser"
import router from "./routes"
import notFound from "./middlewares/notFound"

app.use(bodyParser.json())
app.use(cookieParser())

app.use(cors(
    {
        origin: ["http://localhost:5173", "https://avvisaagency.vercel.app"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }
))

app.use("/api/v1", router)

app.get("/", (req: Request, res: Response) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Server Page</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    text-align: center;
                    padding: 50px;
                }
                h1 {
                    color: #333;
                }
                p {
                    color: #666;
                }
            </style>
        </head>
        <body>
            <h1>Server is Up and Running</h1>
            <p>Welcome to our website Server!</p>
        </body>
        </html>
    `);
});

app.use(notFound)

export default app