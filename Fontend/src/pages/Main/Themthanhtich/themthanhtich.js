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
