const mongoose = require('mongoose')

const thanhvienSchema = new mongoose.Schema({
  mathanhvien: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ThanhVien',
    required: true
  },
  hoten: {
    type: String,
    required: true
  },
  quequan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QueQuan',
    required: true
  },
  // Add other fields as necessary
  thanhviencu: {
    type: Boolean,
    default: false
  },
  ngayphatsinh: {
    type: Date,
    required: true
  },
  gioitinh: {
    type: String,
    enum: ['Nam', 'Nu'],
    required: true
  },
  diachi: {
    type: String,
    required: true
  },
  ngaygiosinh: {
    type: Date,
    required: true
  },
  manghenghiep: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NgheNghiep',
    required: true
  },
  maloaiquanhe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LoaiQuanHe',
    required: true
  }
})

const Thanhvien = mongoose.model("thanhvien", thanhvienSchema, "thanhvien")

module.exports = Thanhvien