import express, { urlencoded } from "express";
import config from './config'
import listRoutes from './routes/list.rout'

const app = express()
let port

// settings
app.set('port', config.port)

//midlewares
app.use(express.json())
app.use(urlencoded({ extended: false }))

app.use(listRoutes)

export default app