import express from "express"
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose"
import bookRoute from "./routes/bookRoute.js"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-type"]
// }))
app.get('/', (req,res)=>{
    console.log(req)
    return res.status(234).send("Welcome to MERN tutorial")
})

app.use('/books', bookRoute)

mongoose.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to database')
    app.listen(PORT, ()=>{
        console.log("App is listening on port: " + PORT)
    })
})
.catch((error)=>{
    console.log(error)
})