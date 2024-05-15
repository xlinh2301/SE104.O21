const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require('dotenv').config();

const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cors())


const route = require('./routes')
const db = require('./config/db')

db.connect()

route(app)

app.listen(port, () => {
  console.log("server is running")
})