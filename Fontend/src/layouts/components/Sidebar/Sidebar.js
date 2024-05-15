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
        <p className="sidebar__header">Cây gia phả</p>
        <div className='sidebar__container'>
          <span className="sidebar__container__span active" onClick={Giapha}>Gia phả</span>
          <span className="sidebar__container__span" onClick={Tracuu}>Tra cứu</span>
          <span className="sidebar__container__span" onClick={Themthanhvien}>Thêm thành viên</span>
          <span className="sidebar__container__span" onClick={Themthanhtich}>Thêm thành tích</span>
          <span className="sidebar__container__span" onClick={Thaydoithongtin}>Thay đổi thông tin</span>
          <span className="sidebar__container__span" onClick={Ghinhanketthuc}>Ghi nhận kết thúc</span>
          <span className="sidebar__container__span" onClick={Lapbaocao}>Lập báo cáo</span>
          <span className="sidebar__container__span" onClick={logout}>Đăng xuất</span>
        </div>
      </div>
    </>
  )
}

export default Sidebar;