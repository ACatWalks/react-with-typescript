import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"

const app: Express = express()

const PORT: number = 4000

app.use(cors())
app.use(todoRoutes)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}: ${process.env.MONGO_PASSWORD}@cluster0.inil8.mongodb.net/${process.env.MONGO_DB}`
//const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(uri).then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`))).catch(error => {throw error})