import React, { useState } from "react";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "./themthanhtich.scss";
import "react-datepicker/dist/react-datepicker.css";

export const Themthanhtich = () => {
  const [formData, setFormData] = useState({
    hoten: "",
    loaithanhtich: "Giải nhất quốc gia",
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

  const formatDate = (date) => {
    const formattedDate = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
    return formattedDate;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Format datetime values before sending to the database
      const formattedNgayBatDau = formatDate(formData.ngaybatdau);
      const formattedNgayKetThuc = formatDate(formData.ngayketthuc);

      const token = localStorage.getItem('token');
      const response = await axios.post("http://localhost:3001/themthanhtich", {
        ...formData,
        ngaybatdau: formattedNgayBatDau,
        ngayketthuc: formattedNgayKetThuc,
      },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log(response.data);
      alert("Đã thêm mới 1 thành tích!!");
    } catch (error) {
      console.error("Error:", error);
    }
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
            <label htmlFor="ngaybatdau">Ngày bắt đầu</label>
            <DatePicker
              selected={formData.ngaybatdau}
              onChange={(date) => handleDateChange("ngaybatdau", date)}
              showTimeSelect={false}
              dateFormat="Pp" // Format with time
            />
          </div>
          <div className="form-group">
            <label htmlFor="ngayketthuc">Ngày kết thúc</label>
            <DatePicker
              selected={formData.ngayketthuc}
              onChange={(date) => handleDateChange("ngayketthuc", date)}
              showTimeSelect={false}
              dateFormat="Pp" // Format with time
            />
          </div>
        </div>
        <button type="submit" className="button-addmember">Thêm thành tích</button>
      </form>
    </div>
  );
};
