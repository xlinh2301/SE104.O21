import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./lapbaocao.scss";

export const Lapbaocao = () => {
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [reportType, setReportType] = useState('Tăng/Giảm');
  const [reportData, setReportData] = useState([]);
  const [error, setError] = useState('');

  const fetchReport = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3001/lapbaocao', {
        params: {
          startYear,
          endYear,
          type: reportType,
        },
        headers: { Authorization: `Bearer ${token}` }
      });
      setReportData(response.data);
      setError('');
    } catch (error) {
      setError('Lỗi: ' + (error.response?.data?.message || error.message));
      console.error('Lỗi:', error);
    }
  };

  const handleReportTypeChange = (type) => {
    setReportType(type);
    setReportData([]);
    setError('');
  };

  return (
    <div className="lapbaocao-container">
      <div className="filter-section">
        <input
          type="number"
          placeholder="Năm bắt đầu"
          value={startYear}
          onChange={(e) => setStartYear(e.target.value)}
        />
        <input
          type="number"
          placeholder="Năm kết thúc"
          value={endYear}
          onChange={(e) => setEndYear(e.target.value)}
        />
        <button onClick={() => handleReportTypeChange('Tăng/Giảm')}>Tăng/Giảm</button>
        <button onClick={() => handleReportTypeChange('Thành tích')}>Thành tích</button>
        <button onClick={fetchReport}>Xuất báo cáo</button>
      </div>

      {reportType === 'Tăng/Giảm' && (
        <div className="report-section">
          <h2>BÁO CÁO TĂNG GIẢM THÀNH VIÊN</h2>
          {error && <p className="error-message">{error}</p>}
          {!error && (
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Năm</th>
                  <th>Số lượng sinh</th>
                  <th>Số lượng kết hôn</th>
                  <th>Số lượng mất</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((row, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{row.year}</td>
                    <td>{row.SoLuongQuanhe1}</td>
                    <td>{row.SoLuongQuanhe2}</td>
                    <td>{row.death}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {reportType === 'Thành tích' && (
        <div className="report-section">
          <h2>BÁO CÁO THÀNH TÍCH CÁC THÀNH VIÊN</h2>
          {error && <p className="error-message">{error}</p>}
          {!error && (
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>LOẠI THÀNH TÍCH</th>
                  <th>SỐ LƯỢNG</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((row, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{row.achievementType}</td>
                    <td>{row.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default Lapbaocao;
