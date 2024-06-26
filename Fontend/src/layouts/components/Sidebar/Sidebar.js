import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

function Sidebar() {
  const [activeItem, setActiveItem] = useState('');

  const handleClick = (item) => {
    setActiveItem(item);
  };

  const menuItems = [
    // { name: 'User', label: 'Thông tin người dùng', url: '/user' },
    { name: 'Giapha', label: 'Gia phả', url: '/main' },
    { name: 'Tracuu', label: 'Tra cứu', url: '/tracuu' },
    { name: 'Themthanhvien', label: 'Thêm thành viên', url: '/themthanhvien' },
    { name: 'Themthanhtich', label: 'Thêm thành tích', url: '/themthanhtich' },
    { name: 'Thaydoithongtin', label: 'Thay đổi thông tin', url: '/thaydoithongtin' },
    { name: 'Ghinhanketthuc', label: 'Ghi nhận kết thúc', url: '/ghinhanketthuc' },
    { name: 'Lapbaocao', label: 'Lập báo cáo', url: '/lapbaocao' },
    { name: 'logout', label: 'Đăng xuất', url: '/' } // You may need to adjust the URL for logout
  ];

  return (
    <div className="sidebar">
      <p className="sidebar-header">Bảng điều khiển</p>
      <div className="sidebar-container">
        {menuItems.map((menuItem, index) => (
          <NavLink
            key={index}
            to={menuItem.url}
            className={`sidebar-container-span ${activeItem === menuItem.name ? 'active' : ''}`}
            onClick={() => handleClick(menuItem.name)}
          >
            {menuItem.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
