import React, { useState } from "react";
import axios from 'axios';
import "./thaydoithongtin.scss";
import "react-datepicker/dist/react-datepicker.css";

export const Thaydoithongtin = () => {
  const [formData, setFormData] = useState({
    hoten: "",
    maThanhVien: "",
    status: "",
    mathanhviencu: "",
    nguyennhanmat: "Tai nạn giao thông",
    diadiemmaitang: "Nghĩa trang công cộng",
    loaiquanhemoi: "Con",
    quequanmoi: "Bình Phước",
    nghenghiepmoi: "Lập trình viên",
  });
  const [searchResult, setSearchResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Lấy token từ Local Storage
      const response = await axios.post("http://localhost:3001/thaydoithongtin/search", {
        hoten: formData.hoten,
        maThanhVien: formData.maThanhVien
      }, {
        headers: { Authorization: `Bearer ${token}` } // Gửi token trong header
      });

      setSearchResult(response.data);
    } catch (error) {
      console.error("Error:", error);
      setSearchResult(null);
    }
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token'); // Lấy token từ Local Storage
      await axios.post("http://localhost:3001/thaydoithongtin/update", {
        ...formData,
        status: searchResult.status
      }, {
        headers: { Authorization: `Bearer ${token}` } // Gửi token trong header
      });

      alert("Cập nhật thông tin thành công!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const renderSearchResult = () => {
    if (!searchResult) return null;

    const { status } = searchResult;

    if (status === 'dead') {
      return (
        <div className="member-form-container">
          <p>Tình trạng: Mất</p>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nguyennhanmat">Thay đổi nguyên nhân mất</label>
              <select name="nguyennhanmat" className="nguyennhanmat" value={formData.nguyennhanmat} onChange={handleChange}>
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
                <option value="Nguyên nhân khác">Nguyên nhân khác</option>
                <option value="Ung thư">Ung thư</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="diadiemmaitang">Thay đổi địa điểm mai táng</label>
              <select name="diadiemmaitang" className="diadiemmaitang" value={formData.diadiemmaitang} onChange={handleChange}>
                <option value="Nghĩa trang công cộng">Nghĩa trang công cộng</option>
                <option value="Nghĩa trang gia đình">Nghĩa trang gia đình</option>
                <option value="Nghĩa trang riêng">Nghĩa trang riêng</option>
              </select>
            </div>
          </div>
          <button onClick={handleUpdate} className="button-addmember">Cập nhật</button>
        </div>
      );
    } else if (status === 'alive') {
      return (
        <div className="member-form-container">
          <p>Tình trạng: Còn sống</p>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="mathanhviencu">Mã thành viên cũ</label>
              <input type="text" name="mathanhviencu" value={formData.mathanhviencu} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="loaiquanhemoi">Loại quan hệ mới</label>
              <select name="loaiquanhemoi" className="loaiquanhemoi" value={formData.loaiquanhemoi} onChange={handleChange}>
                <option value="Con">Con</option>
                <option value="Vợ/Chồng">Vợ/Chồng</option>
                <option value="Gốc">Gốc</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quequanmoi">Quê quán</label>
              <select name="quequanmoi" className="quequanmoi" value={formData.quequanmoi} onChange={handleChange}>
                <option value="Bình Phước">Bình Phước</option>
                <option value="Trà Vinh">Trà Vinh</option>
                <option value="Hà Tĩnh">Hà Tĩnh</option>
                <option value="Lâm Đồng">Lâm Đồng</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="nghenghiepmoi">Nghề nghiệp</label>
              <select name="nghenghiepmoi" className="nghenghiepmoi" value={formData.nghenghiepmoi} onChange={handleChange}>
                <option value="Lập trình viên">Lập trình viên</option>
                <option value="Kỹ sư xây dựng">Kỹ sư xây dựng</option>
                <option value="Giáo viên">Giáo viên</option>
                <option value="Bác sĩ">Bác sĩ</option>
                <option value="Nhà thiết kế đồ họa">Nhà thiết kế đồ họa</option>
                <option value="Nhân viên kinh doanh">Nhân viên kinh doanh</option>
              </select>
            </div>
          </div>
          <button onClick={handleUpdate} className="button-addmember">Cập nhật</button>
        </div>
      );
    }
  };

  return (
    <div className="thaydoithongtin-container">
      <h1>Thay Đổi Thông Tin Thành Viên</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="hoten">Họ và tên:</label>
          <input
            type="text"
            id="hoten"
            name="hoten"
            value={formData.hoten}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="maThanhVien">Mã thành viên:</label>
          <input
            type="text"
            id="maThanhVien"
            name="maThanhVien"
            value={formData.maThanhVien}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="button-addmember">Tìm kiếm</button>
      </form>
      {renderSearchResult()}
    </div>
  );
};
