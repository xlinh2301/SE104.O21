const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const port = 3001
app.use(express.json())
app.use(cors())


const route = require('./routes')
const db = require('./config/db')

db.connect()

route(app)

app.listen(port, () => {
  console.log("server is running")
})