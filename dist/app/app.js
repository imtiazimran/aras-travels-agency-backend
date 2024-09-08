"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./routes"));
const notFound_1 = __importDefault(require("./middlewares/notFound"));
app.use((0, cors_1.default)({
    origin: ["http://localhost:5173", "https://avvisaagency.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/api/v1", routes_1.default);
app.get("/", (req, res) => {
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
app.use(notFound_1.default);
exports.default = app;
