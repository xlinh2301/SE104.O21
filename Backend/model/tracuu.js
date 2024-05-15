const mongoose = require('mongoose')

const tracuuSchema = new mongoose.Schema({
  mathanhvien: String,
  hoten: String,
  quequan: String,
  //add them
})

const Tracuu = mongoose.model("tracuu", tracuuSchema)

module.exports = Tracuu