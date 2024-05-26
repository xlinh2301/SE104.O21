import React, { useState, useEffect } from "react";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "./themthanhtich.scss";
import "react-datepicker/dist/react-datepicker.css";

export const Themthanhtich = () => {
  useEffect(() => {
    document.title = "Thêm thành tích";
  }, []);
  const [formData, setFormData] = useState({
    mathanhvien: "",
    loaithanhtich: "Bằng Cấp Học Vấn",
    tenthanhtich: "",
    ngayphatsinh: new Date(),
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Format datetime values before sending to the database
      const formattedNgayphatsinh = formatDate(formData.ngayphatsinh);

      const token = localStorage.getItem('token');
      const response = await axios.post("http://localhost:3001/themthanhtich", {
        ...formData,
        ngayphatsinh: formattedNgayphatsinh,
      },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log(response.data);
      alert("Đã thêm mới 1 thành tích!!");
    } catch (error) {
      alert(error.response.data.message);
      console.error("Error:", error);
    }
  };

  const formatDate = (date) => {
    const formattedDate = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
    return formattedDate;
  };

  return (
    <div className="member-form-container">
      <h2>Thêm thành tích</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="mathanhvien">Mã thành viên</label>
            <input type="text" name="mathanhvien" value={formData.mathanhvien} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="loaithanhtich">Loại thành tích</label>
            <select name="loaithanhtich" className="loaithanhtich" value={formData.loaithanhtich} onChange={handleChange}>
              <option value="Bằng Cấp Học Vấn">Bằng Cấp Học Vấn</option>
              <option value="Giải Thưởng Nghề Nghiệp">Giải Thưởng Nghề Nghiệp</option>
              <option value="Thành Tựu Khoa Học">Thành Tựu Khoa Học</option>
              <option value="Thành Tích Văn Hóa - Nghệ Thuật">Thành Tích Văn Hóa - Nghệ Thuật</option>
              <option value="Thành Tích Thể Thao">Thành Tích Thể Thao</option>
              <option value="Hoạt Động Cộng Đồng">Hoạt Động Cộng Đồng</option>
              <option value="Danh Hiệu Quân Sự">Danh Hiệu Quân Sự</option>
              <option value="Chức Vụ Lãnh Đạo">Chức Vụ Lãnh Đạo</option>
              <option value="Công Trình và Sáng Chế">Công Trình và Sáng Chế</option>
              <option value="Thành Tựu Gia Đình">Thành Tựu Gia Đình</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="tenthanhtich">Tên thành tích</label>
            <input type="text" name="tenthanhtich" value={formData.tenthanhtich} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="ngayphatsinh">Ngày phát sinh</label>
            <DatePicker
              selected={formData.ngayphatsinh}
              onChange={(date) => handleDateChange("ngayphatsinh", date)}
              showTimeSelect={false}
              dateFormat="yyyy-MM-dd"
            />
          </div>
        </div>
        <button type="submit" className="button-addmember">Thêm thành tích</button>
      </form>
    </div>
  );
};
