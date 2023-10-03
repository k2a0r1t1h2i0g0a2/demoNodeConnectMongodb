import express from 'express'
import cors from 'cors'
import connectDB from './Database/dbConfig.js'
import empRouter from './Routers/employee.router.js'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT

const app = express();
app.use(cors())
app.use(express.json())

app.use('/api',empRouter)
connectDB();
app.listen(port, () => {
    console.log("app is listening with",port);
})