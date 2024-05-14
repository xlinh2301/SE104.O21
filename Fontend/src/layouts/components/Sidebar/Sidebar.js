import React from 'react'
import { Link } from 'react-router-dom';
import "./Sidebar.scss"

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <p className="sidebar__header">Cây gia phả</p>
        <Link to="/caygiapha">
          <span className="sidebar__span">Gia phả</span>
        </Link>
        <Link to="/tracuu">
          <span className="sidebar__span">Tra cứu</span>
        </Link>
        <Link to="/themthanhvien">
          <span className="sidebar__span">Thêm thành viên</span>
        </Link>
        <Link to="/themthanhtich">
          <span className="sidebar__span">Thêm thành tích</span>
        </Link>
        <Link to="/thaydoithongtin">
          <span className="sidebar__span">Thay đổi thông tin</span>
        </Link>
        <Link to="/ghinhanketthuc">
          <span className="sidebar__span">Ghi nhận kết thúc</span>
        </Link>
        <Link to="/lapbaocao">
          <span className="sidebar__span">Lập báo cáo</span>
        </Link>
        <Link to="/dangxuat">
          <span className="sidebar__span">Đăng xuất</span>
        </Link>
      </div>
    </>
  )
}

export default Sidebar;