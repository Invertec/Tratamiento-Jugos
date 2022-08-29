import express from "express";
import config from './config'
import listRoutes from './routes/list.rout'

const app = express()
let port

// settings
app.set('port', config.port)

app.use(listRoutes)

export default app