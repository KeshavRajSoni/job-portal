//packages
import cookieParser from 'cookie-parser';
import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import colors from "colors"
dotenv.config({});

//files
import connnectDB from './utils/db.js';
import UserRouter from './routes/user.route.js';

const app = express();

//middleware
app.use(
    express.json(),
    express.urlencoded({ extended: true }),
    cookieParser(),
    cors({
        origin: ['http://localhost:5173', 'http://localhost:3000'],
        credentials: true
    }));

app.use("/api/v1/user", UserRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
    connnectDB();
    console.log(`server is running on port ${port}`.bgBlue);
});