import React from 'react'
// import { Link } from 'react-router-dom';
import "./Sidebar.scss"

function logout() {
  localStorage.clear();
  window.location.href = '/';
}

function Tracuu() {
  window.location.href = '/tracuu';
}

function Giapha() {
  window.location.href = '/main';
}

function Themthanhvien() {
  window.location.href = '/main';
}

function Themthanhtich() {
  window.location.href = '/main';
}

function Thaydoithongtin() {
  window.location.href = '/main';
}

function Ghinhanketthuc() {
  window.location.href = '/ghinhanketthuc';
}

function Lapbaocao() {
  window.location.href = '/main';
}

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <p className="sidebar-header">Bảng điều khiển</p>
        <div className='sidebar-container'>
          <span className="sidebar-container-span" onClick={Giapha}>Gia phả</span>
          <span className="sidebar-container-span" onClick={Tracuu}>Tra cứu</span>
          <span className="sidebar-container-span" onClick={Themthanhvien}>Thêm thành viên</span>
          <span className="sidebar-container-span" onClick={Themthanhtich}>Thêm thành tích</span>
          <span className="sidebar-container-span" onClick={Thaydoithongtin}>Thay đổi thông tin</span>
          <span className="sidebar-container-span" onClick={Ghinhanketthuc}>Ghi nhận kết thúc</span>
          <span className="sidebar-container-span" onClick={Lapbaocao}>Lập báo cáo</span>
          <span className="sidebar-container-span" onClick={logout}>Đăng xuất</span>
        </div>
      </div>
    </>
  )
}

export default Sidebar;