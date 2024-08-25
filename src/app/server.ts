import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function server() {
    try {
        await mongoose.connect(config.MONGODB_URL as string);
        console.log("Database connected")
        const PORT = config.PORT;
        const server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {
        console.log('Error starting server:', error);
    }
}

server() 