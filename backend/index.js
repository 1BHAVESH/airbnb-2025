import dotenv from"dotenv"
dotenv.config({})
import express from "express"
import { connectDB } from "./database/dbConnection.js";
import userRoute from "./routes/user.js"
import listingRoute from "./routes/listing.js"
import hostRoute from "./routes/host.js"
import cookieParser from "cookie-parser";
import cors from "cors"
import bodyParser from "body-parser"


const app = express()

const PORT = process.env.PORT || 3001;

//default middlewere 
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/v1/user", userRoute)
app.use("/api/v1/listing", listingRoute)
app.use("/api/v1/host", hostRoute)

app.listen(PORT, ()=> {
    console.log(`Server listning at this port ${PORT}`)
    connectDB()
})