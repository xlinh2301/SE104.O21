import React, { useState } from "react";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "./themthanhvien.scss";
import "react-datepicker/dist/react-datepicker.css";

export const Themthanhvien = () => {
  const [formData, setFormData] = useState({
    mathanhvien: "",
    hoten: "",
    gioitinh: "",
    ngaygiosinh: new Date(),
    maquequan: "",
    manghenghiep: "",
    diachi: "",
    mathanhviencu: "",
    maloaiquanhe: "",
    ngayphatsinh: new Date()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDateChange = (name, date) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: date
    }));
  };

  const formatDate = (date) => {
    const formattedDate = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
    return formattedDate;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Format datetime values before sending to the database
      const formattedNgayGioSinh = formatDate(formData.ngaygiosinh);
      const formattedNgayPhatSinh = formatDate(formData.ngayphatsinh);

      const response = await axios.post("http://localhost:3001/themthanhvien", {
        ...formData,
        ngaygiosinh: formattedNgayGioSinh,
        ngayphatsinh: formattedNgayPhatSinh
      });

      console.log(response.data);
      alert("Đã thêm mới 1 thành viên!!");
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div className="member-form-container">
      <h2>Thêm thành viên mới</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="mathanhvien">Mã thành viên</label>
            <input type="text" name="mathanhvien" value={formData.mathanhvien} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="hoten">Họ và tên</label>
            <input type="text" name="hoten" value={formData.hoten} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="gioitinh">Giới tính</label>
            <input type="text" name="gioitinh" value={formData.gioitinh} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="ngaygiosinh">Ngày giờ sinh</label>
            <DatePicker
              selected={formData.ngaygiosinh}
              onChange={(date) => handleDateChange("ngaygiosinh", date)}
              showTimeSelect={false} // Disable time selection
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="maquequan">Mã quê quán</label>
            <input type="text" name="maquequan" value={formData.maquequan} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="manghenghiep">Mã nghề nghiệp</label>
            <input type="text" name="manghenghiep" value={formData.manghenghiep} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="diachi">Địa chỉ</label>
            <input type="text" name="diachi" value={formData.diachi} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="mathanhviencu">Mã thành viên cũ</label>
            <input type="text" name="mathanhviencu" value={formData.mathanhviencu} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="maloaiquanhe">Mã loại quan hệ</label>
            <input type="text" name="maloaiquanhe" value={formData.maloaiquanhe} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="ngayphatsinh">Ngày phát sinh</label>
            <DatePicker
              selected={formData.ngayphatsinh}
              onChange={(date) => handleDateChange("ngayphatsinh", date)}
              showTimeSelect={false} // Disable time selection
            />
          </div>
        </div>
        <button type="submit">Thêm thành viên</button>
      </form>
    </div>
  );
};
