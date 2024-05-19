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
      setResult(data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };
  const DATA_TEST = [{ name: 'test1', id: 'test1' }, { name: 'test2', id: 'test2' }]

  return (
    <div>
      <form onSubmit={handleSubmit} className='tracuu-body'>
        <div className="tracuu-body-search">
          <input className='tracuu-body-search-name' type="text" placeholder='Họ và tên' value={hoTen} onChange={(e) => setHoTen(e.target.value)} required />
          <input className="tracuu-body-search-id" type="text" placeholder='Mã thành viên' value={maSo} onChange={(e) => setMaSo(e.target.value)} required />
        </div>
        <button className='tracuu-body-search-button' type="submit">Tìm kiếm</button>
      </form>
      {result && (

        <div>
          {/* <h3>Kết quả:</h3>
          <p>Mã Thành Viên: {result.id}</p>
          <p>Họ Tên: {result.name}</p>
          <p>Quê Quán: {result.address}</p> */}
          <table className='body-table'>
            <tr>
              <td>Mã thành viên</td>
              <td>Họ tên</td>
              <td>Quê quán</td>
            </tr>

            <tr>
              <td>{result.id}</td>
              <td>{result.name}</td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
};
