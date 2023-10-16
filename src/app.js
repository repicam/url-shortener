import express from "express"
import dotenv from "dotenv"
dotenv.config()
import { connectDB } from './config/db.js'
import urlRoutes from './routes/urlRoute.js'

const app = express()

app.use( express.json() )

app.use( '/api/v1/shortener', urlRoutes )

const PORT = process.env.PORT || 8080
app.listen( PORT, () => {
  connectDB()
  console.log( `Server is running on port ${ PORT }` )
} )