import express, {Application, Request, Response} from "express"
import bodyParser from "body-parser"
const app: Application = express()
import cors from "cors"
import cookieParser from "cookie-parser"



app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

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

export default app