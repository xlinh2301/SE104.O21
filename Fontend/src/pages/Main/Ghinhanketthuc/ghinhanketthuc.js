import "./ghinhanketthuc.scss"
import React, { useState } from "react";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "./ghinhanketthuc.scss";
import "react-datepicker/dist/react-datepicker.css";

export const Ghinhanketthuc = () => {
  const [formData, setFormData] = useState({
    hoten: "",
    mathanhvien: "",
    ngaygiomat: new Date(),
    nguyennhan: "Tai nạn giao thông",
    diadiemmaitang: "Nghĩa trang công cộng"
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
      const formattedNgaygiomat = formatDate(formData.ngaygiomat);

      const token = localStorage.getItem('token');
      const response = await axios.post("http://localhost:3001/ghinhanketthuc", {
        ...formData,
        ngaygiomat: formattedNgaygiomat,
      },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log(response.data);
      alert("Đã ghi nhận thành công!!");
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
      <h2>Ghi nhận kết thúc</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="hoten">Họ tên</label>
            <input type="text" name="hoten" value={formData.hoten} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="mathanhvien">Mã thành viên</label>
            <input type="text" name="mathanhvien" value={formData.mathanhvien} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="ngaygiomat">Ngày giờ mất</label>
            <DatePicker
              selected={formData.ngaygiomat}
              onChange={(date) => handleDateChange("ngaygiomat", date)}
              showTimeSelect={false}
              dateFormat="Pp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="diadiemmaitang">Địa điểm mai táng</label>
            <select name="diadiemmaitang" className="diadiemmaitang" value={formData.diadiemmaitang} onChange={handleChange}>
              <option value="Nghĩa trang công cộng">Nghĩa trang công cộng</option>
              <option value="Nghĩa trang gia đình">Nghĩa trang gia đình</option>
              <option value="Nghĩa trang riêng">Nghĩa trang riêng</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nguyennhan">Nguyên nhân mất</label>
            <select name="nguyennhan" className="nguyennhan" value={formData.nguyennhan} onChange={handleChange}>
              <option value="Tai nạn giao thông">Tai nạn giao thông</option>
              <option value="Tai nạn lao động">Tai nạn lao động</option>
              <option value="Bệnh tật">Bệnh tật</option>
              <option value="Tự tử">Tự tử</option>
              <option value="Tội phạm">Tội phạm</option>
              <option value="Chiến tranh">Chiến tranh</option>
              <option value="Tai nạn thể thao">Tai nạn thể thao</option>
              <option value="Nạn đói">Nạn đói</option>
              <option value="Catastrophe tự nhiên">Catastrophe tự nhiên</option>
              <option value="Nhiễm trùng">Nhiễm trùng</option>
              <option value="Ung thư">Ung thư</option>
              <option value="Nguyên nhân khác">Nguyên nhân khác</option>

            </select>
          </div>
        </div>
        <button type="submit" className="button-addmember">Thêm thành tích</button>
      </form>
    </div>
  );
};
