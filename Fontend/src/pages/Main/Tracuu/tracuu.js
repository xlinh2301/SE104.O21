import React, { useState } from 'react';
import './tracuu.scss'

export const Tracuu = () => {
  const [hoTen, setHoTen] = useState('');
  const [maSo, setMaSo] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/tracuu`);
      const data = await response.json();
      console.log('Success')
      setResult(data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='body__tracuu'>
        <div>
          <label>Họ Tên:</label>
          <input type="text" value={hoTen} onChange={(e) => setHoTen(e.target.value)} required />
        </div>
        <div>
          <label>Mã Số:</label>
          <input type="text" value={maSo} onChange={(e) => setMaSo(e.target.value)} required />
        </div>
        <button type="submit">Tìm kiếm</button>
      </form>
      {result && (
        <div>
          <h3>Kết quả:</h3>
          <p>Mã Thành Viên: {result.mathanhvien}</p>
          <p>Họ Tên: {result.hoten}</p>
          <p>Quê Quán: {result.quequan}</p>
        </div>
      )}
    </div>
  );
};
