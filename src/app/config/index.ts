import dotenv from "dotenv"
import path from "path"

dotenv.config({path: path.join((process.cwd(), '.env'))})

export default {
    PORT: process.env.PORT || 3000,
    MONGODB_URL: process.env.MONGODB_URL,
    JWT_SECRET: process.env.JWT_SECRET || "secret",
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1d",
    NODE_ENV: process.env.NODE_ENV
}