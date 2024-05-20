// tracuu.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './tracuu.scss'; // Import SCSS file for styling

export const Tracuu = () => {
  const [hoTen, setHoTen] = useState('');
  const [maSo, setMaSo] = useState('');
  const [result, setResult] = useState(null);
  const [showForm, setShowForm] = useState(true);
  const [noResult, setNoResult] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/tracuu', { hoTen, maSo });
      const data = response.data;
      if (!data) {
        setNoResult(true); // No result found
        setShowForm(true); // Show the form again
      } else {
        setResult(data);
        setShowForm(false); // Hide the form after submitting
        setNoResult(false); // Reset noResult state
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      alert("Không tìm thấy thành viên")
    }
  };

  const handleBack = () => {
    setResult(null);
    setShowForm(true); // Show the form again when clicking back
    setNoResult(false);
  };

  return (
    <div className="tracuu-container"> {/* Apply container class */}
      <div>
        <div className={`${activeTab === 'search' ? 'show active' : ''}`}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Họ Tên:</label>
              <input type="text" value={hoTen} onChange={(e) => setHoTen(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Mã Số:</label>
              <input type="text" value={maSo} onChange={(e) => setMaSo(e.target.value)} required />
            </div>
            <button type="submit">Tìm kiếm</button>
          </form>
        </div>
        <div className={`fade ${activeTab === 'result' ? 'show active' : ''}`}>
          {result && (
            <div>
              <h3>Kết quả:</h3>
              <table className="result-table"> {/* Apply table class */}
                <thead>
                  <tr>
                    {/* Table headers */}
                    <th>Mã Thành Viên</th>
                    <th>Họ và Tên</th>
                    <th>Giới Tính</th>
                    <th>Ngày Giờ Sinh</th>
                    <th>Mã Quê Quán</th>
                    <th>Mã Nghề Nghiệp</th>
                    <th>Địa Chỉ</th>
                    <th>Mã Thành Viên Cũ</th>
                    <th>Mã Loại Quan Hệ</th>
                    <th>Ngày Phát Sinh</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {/* Table data */}
                    <td>{result.MaThanhVien}</td>
                    <td>{result.HoVaTen}</td>
                    <td>{result.GioiTinh}</td>
                    <td>{result.NgayGioSinh}</td>
                    <td>{result.MaQueQuan}</td>
                    <td>{result.MaNgheNghiep}</td>
                    <td>{result.DiaChi}</td>
                    <td>{result.MaThanhVienCu}</td>
                    <td>{result.MaLoaiQuanHe}</td>
                    <td>{result.NgayPhatSinh}</td>
                  </tr>
                </tbody>
              </table>
              <button onClick={handleBack}>Quay lại</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
