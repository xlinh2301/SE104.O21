import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './tracuu.scss'; // Import SCSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export const Tracuu = () => {
  useEffect(() => {
    document.title = "Tra cứu";
  }, []);

  const [hoTen, setHoTen] = useState('');
  const [results, setResults] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(1); // Display one result per page

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:3001/tracuu',
        { hoTen },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const formattedData = response.data.map(member => ({
        ...member,
        NgayGioSinh: member.NgayGioSinh ? new Date(member.NgayGioSinh).toISOString().split("T")[0] : null,
        NgayPhatSinhMoiQuanHe: member.NgayPhatSinhMoiQuanHe ? new Date(member.NgayPhatSinhMoiQuanHe).toISOString().split("T")[0] : null,
        NgaySinh: member.NgaySinh ? new Date(member.NgaySinh).toISOString().split("T")[0] : null,
      }));

      if (formattedData.length === 0) {
        setResults([]);
        setNoResult(true);
      } else {
        setResults(formattedData);
        setNoResult(false);
        setCurrentPage(1); // Reset to the first page on new search
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      alert(error.response.data.message);
    }
  };

  // Calculate indices for current page
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="tracuu-container">
      <div className='body-form'>
        <form className="s" onSubmit={handleSubmit}>
          <h2>Tra cứu thành viên</h2>
          <input type="search" className="sb" name="q" autoComplete="off" placeholder="Họ và tên" value={hoTen} onChange={(e) => setHoTen(e.target.value)} required />
          <button type="submit" className="sbtn fa fa-search"></button>
        </form>
      </div>
      <div>
        {noResult && <p>No results found.</p>}
        {currentResults.length > 0 && (
          <div className='results'>
            <ul>
              {currentResults.map((result, index) => (
                <li key={index}>
                  <strong>Mã thành viên:</strong> {result.MaThanhVien} <br />
                  <strong>Họ và Tên:</strong> {result.HoVaTen} <br />
                  <strong>Giới Tính:</strong> {result.GioiTinh} <br />
                  <strong>Ngày giờ sinh:</strong> {result.NgayGioSinh} <br />
                  <strong>Địa chỉ:</strong> {result.DiaChi} <br />
                  <strong>Tên thành viên cũ:</strong> {result.TenThanhVienCu} <br />
                  <strong>Mã loại quan hệ:</strong> {result.MaLoaiQuanHe} <br />
                  <strong>Tên loại quan hệ:</strong> {result.TenLoaiQuanHe} <br />
                  <strong>Ngày phát sinh mới quan hệ:</strong> {result.NgayPhatSinhMoiQuanHe} <br />
                  <strong>Mã thành viên cũ:</strong> {result.MaThanhVienCu} <br />
                  <strong>Mã danh sách thành viên:</strong> {result.MaDanhSachThanhVien} <br />
                  <strong>Đời:</strong> {result.Doi} <br />
                  <strong>Cha/Mẹ:</strong> {result.TenChaHoacMe} <br />
                  <strong>Mã cha/mẹ:</strong> {result.MaChaHoacMe} <br />
                  <strong>Tên nghề nghiệp:</strong> {result.TenNgheNghiep} <br />
                  <strong>Tên quê quán:</strong> {result.TenQueQuan} <br />
                </li>
              ))}
            </ul>
            <Pagination
              resultsPerPage={resultsPerPage}
              totalResults={results.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

// Pagination Component
const Pagination = ({ resultsPerPage, totalResults, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <a onClick={() => paginate(number)} href='#!' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
