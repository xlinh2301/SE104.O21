import React, { useState, useEffect } from "react";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "./themthanhvien.scss";
import "react-datepicker/dist/react-datepicker.css";

export const Themthanhvien = () => {
  useEffect(() => {
    document.title = "Thêm thành viên";
  }, []);
  const [formData, setFormData] = useState({
    mathanhviencu: "", // New field
    loaiquanhe: "Con", // Default value
    ngayphatsinh: new Date(),
    hovaten: "",
    gioitinh: "Nam",
    ngaygiosinh: new Date(),
    quequan: "Bình Phước",
    nghenghiep: "Lập trình viên",
    diachi: ""
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

      const token = localStorage.getItem('token');
      const response = await axios.post("http://localhost:3001/themthanhvien", {
        ...formData,
        mathanhviencu: formData.loaiquanhe === "Gốc" ? null : formData.mathanhviencu, // Set mathanhviencu to null if loaiquanhe is "Gốc"
        ngaygiosinh: formattedNgayGioSinh,
        ngayphatsinh: formattedNgayPhatSinh,
      },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log(response.data);
      alert("Đã thêm mới 1 thành viên!!");
    } catch (error) {
      console.error("Error:", error);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="member-form-container">
      <h2>Thêm thành viên mới</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="mathanhviencu">Mã thành viên cũ</label>
            <input type="text" name="mathanhviencu" value={formData.mathanhviencu} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="loaiquanhe">Loại quan hệ</label>
            <select name="loaiquanhe" className="loaiquanhe" value={formData.loaiquanhe} onChange={handleChange}>
              <option value="Con">Con</option>
              <option value="Vợ/Chồng">Vợ/Chồng</option>
              <option value="Gốc">Gốc</option> {/* Add the new option "Gốc" */}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="ngayphatsinh">Ngày phát sinh</label>
            <DatePicker
              selected={formData.ngayphatsinh}
              onChange={(date) => handleDateChange("ngayphatsinh", date)}
              dateFormat="yyyy-MM-dd" // Format without time
            />
          </div>
          <div className="form-group">
            <label htmlFor="hovaten">Họ và tên</label>
            <input type="text" name="hovaten" value={formData.hovaten} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="gioitinh">Giới tính</label>
            <select name="gioitinh" className="gioitinh" value={formData.gioitinh} onChange={handleChange}>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="ngaygiosinh">Ngày giờ sinh</label>
            <DatePicker
              selected={formData.ngaygiosinh}
              onChange={(date) => handleDateChange("ngaygiosinh", date)}
              showTimeSelect
              dateFormat="Pp" // Format with time
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="quequan">Quê quán</label>
            <select name="quequan" className="quequan" value={formData.quequan} onChange={handleChange}>
              <option value="Bình Phước">Bình Phước</option>
              <option value="Trà Vinh">Trà Vinh</option>
              <option value="Hà Tĩnh">Hà Tĩnh</option>
              <option value="Lâm Đồng">Lâm Đồng</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="nghenghiep">Nghề nghiệp</label>
            <select name="nghenghiep" className="nghenghiep" value={formData.nghenghiep} onChange={handleChange}>
              <option value="Lập trình viên">Lập trình viên</option>
              <option value="Kỹ sư xây dựng">Kỹ sư xây dựng</option>
              <option value="Giáo viên">Giáo viên</option>
              <option value="Bác sĩ">Bác sĩ</option>
              <option value="Nhà thiết kế đồ họa">Nhà thiết kế đồ họa</option>
              <option value="Nhân viên kinh doanh">Nhân viên kinh doanh</option>
              <option value="Họa sĩ">Họa sĩ</option>
              <option value="Nhân viên marketing">Nhân viên marketing</option>
              <option value="Ca sĩ">Ca sĩ</option>
              <option value="Nhân viên bán hàng">Nhân viên bán hàng</option>
              <option value="Kỹ sư ô tô">Kỹ sư ô tô</option>
              <option value="Nhân viên hành chính">Nhân viên hành chính</option>
              <option value="Kỹ sư điện">Kỹ sư điện</option>
              <option value="Diễn viên">Diễn viên</option>
              <option value="Kỹ sư cơ khí">Kỹ sư cơ khí</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="diachi">Địa chỉ</label>
            <input type="text" name="diachi" value={formData.diachi} onChange={handleChange} required />
          </div>
        </div>
        <button type="submit" className="button-addmember">Thêm thành viên</button>
      </form >
    </div >
  );
};

