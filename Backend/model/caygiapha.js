//model/caygiapha.js

const mongoose = require('mongoose')

const CayGPSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

const CaygiaphaModel = mongoose.model("se104", CayGPSchema)

module.exports = CaygiaphaModel