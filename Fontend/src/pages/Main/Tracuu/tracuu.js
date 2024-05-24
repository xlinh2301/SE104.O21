// tracuu.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './tracuu.scss'; // Import SCSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


export const Tracuu = () => {
  const [hoTen, setHoTen] = useState('');
  const [results, setResults] = useState([]);
  const [noResult, setNoResult] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:3001/tracuu',
        { hoTen },
        { headers: { Authorization: `Bearer ${token}` } }  // Include the token in the request headers
      );
      const data = response.data;
      console.log(data)
      if (!data || data.length === 0) {
        setResults([]); // Reset results
        setNoResult(true); // Set no result flag
      } else {
        setResults(data); // Set results array
        setNoResult(false); // Reset no result flag
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      alert("Không tìm thấy thành viên")
    }
  };

  return (
    <div className="tracuu-container">
      <div className='body-form'>
        <form class="s" onSubmit={handleSubmit}>
          <input type="search" class="sb" name="q" autocomplete="off" placeholder="Họ và tên" value={hoTen} onChange={(e) => setHoTen(e.target.value)} required />
          <button type="submit" class="sbtn fa fa-search"></button>
        </form>
      </div>
      <div>
        {noResult && <p>No results found.</p>}
        {results.length > 0 && (
          <div className='results'>
            <h3>Kết quả:</h3>
            <ul>
              {results.map((result, index) => (
                <li key={index}>
                  <strong>Họ và Tên:</strong> {result.HoVaTen} <br />
                  <strong>Ngày sinh:</strong> {result.NgaySinh} <br />
                  <strong>Đời:</strong> {result.Doi} <br />
                  <strong>Cha/Mẹ:</strong> {result.TenChaHoacMe} <br />
                  <strong>Mã thành viên:</strong> {result.MaThanhVien} <br />
                  <strong>Mã Cha/Mẹ:</strong> {result.MaChaHoacMe} <br />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
