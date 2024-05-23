import React, { useState } from "react";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "./themthanhtich.scss";
import "react-datepicker/dist/react-datepicker.css";

export const Themthanhtich = () => {
  const [formData, setFormData] = useState({
    hoten: "",
    loaithanhtich: "Giải nhất quốc gia",
    tenthanhtich: "",
    ngaybatdau: new Date(),
    ngayketthuc: new Date(),
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
      const formattedNgaybatdau = formatDate(formData.ngaybatdau);
      const formattedNgayketthuc = formatDate(formData.ngayketthuc);

      const token = localStorage.getItem('token');
      const response = await axios.post("http://localhost:3001/themthanhtich", {
        ...formData,
        ngaybatdau: formattedNgaybatdau,
        ngayketthuc: formattedNgayketthuc,
      },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log(response.data);
      alert("Đã thêm mới 1 thành tích!!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const formatDate = (date) => {
    return date.getFullYear(); // Chỉ lấy năm
  };

  return (
    <div className="member-form-container">
      <h2>Thêm thành tích</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="hoten">Họ tên</label>
            <input type="text" name="hoten" value={formData.hoten} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="loaithanhtich">Loại thành tích</label>
            <select name="loaithanhtich" className="loaithanhtich" value={formData.loaithanhtich} onChange={handleChange}>
              <option value="Giải nhất quốc gia">Giải nhất quốc gia</option>
              <option value="Huy chương vàng thể thao">Huy chương vàng thể thao</option>
              <option value="Giải thưởng nghiên cứu khoa học">Giải thưởng nghiên cứu khoa học</option>
              <option value="Bằng khen của Bộ Giáo dục">Bằng khen của Bộ Giáo dục</option>
              <option value="Giải thưởng tình nguyện">Giải thưởng tình nguyện</option>
              <option value="Giải thưởng sáng tạo trẻ">Giải thưởng sáng tạo trẻ</option>
              <option value="Giải nhất cuộc thi toán học">Giải nhất cuộc thi toán học</option>
              <option value="Giải nhất cuộc thi văn học">Giải nhất cuộc thi văn học</option>
              <option value="Giải nhì quốc gia">Giải nhì quốc gia</option>
              <option value="Giải ba quốc gia">Giải ba quốc gia</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="tenthanhtich">Tên thành tích</label>
            <input type="text" name="tenthanhtich" value={formData.tenthanhtich} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="ngaybatdau">Từ năm</label>
            <DatePicker
              selected={formData.ngaybatdau}
              onChange={(date) => handleDateChange("ngaybatdau", date)}
              showTimeSelect={false}
              dateFormat="yyyy" // Chỉ định dạng năm
              showYearPicker // Hiển thị chỉ chọn năm
            />
          </div>
          <div className="form-group">
            <label htmlFor="ngayketthuc">Đến năm</label>
            <DatePicker
              selected={formData.ngayketthuc}
              onChange={(date) => handleDateChange("ngayketthuc", date)}
              showTimeSelect={false}
              dateFormat="yyyy" // Chỉ định dạng năm
              showYearPicker // Hiển thị chỉ chọn năm
            />
          </div>
        </div>
        <button type="submit" className="button-addmember">Thêm thành tích</button>
      </form>
    </div>
  );
};
