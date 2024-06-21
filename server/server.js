import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import routes from "./Routes/userRoutes.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)
app.get('/endpoint',(req,res)=>{
    return res.status(200).json({
        name:"nani"
    })
})

mongoose.connect("mongodb+srv://nanimadhani:nani1234@cluster0.fbhlejg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const PORT = 5000

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})