import React from "react";
import "./changeinfo.scss"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="changeInfo-body">
      <div className="changeInfo-search">
        <div className="changeInfo-search-box">
          <input type="text" placeholder="Họ và tên" />
          <input type="text" placeholder="Mã thành viên" />
        </div>
        <div className="changeInfo-search-button">
          <button className="changeInfo-search-button-1">Tìm kiếm</button>
        </div>
      </div>
      <div className="changeInfo-condition">

      </div>
      <div className="changeInfo-change1">
        <div className="changeInfo-change1-box">
          <p className="changeInfo-change1-text">Thay đổi loại quan hệ:</p>
          <select className="changeInfo-change1-select" placeholder="Mã thành viên cũ"></select>
          <select className="changeInfo-change1-select" placeholder="Loại quan hệ mới"></select>
        </div>
        <div className="changeInfo-change1-box">
          <p className="changeInfo-change1-text">Thay đổi quê quán:</p>
          <select className="changeInfo-change1-select" placeholder="Quê quán mới"></select>
        </div>
        <div className="changeInfo-change1-box">
          <p className="changeInfo-change1-text">Thay đổi nghề nghiệp:</p>
          <select className="changeInfo-change1-select" placeholder="Nghề nghiệp mới"></select>
        </div>
        <div className="changeInfo-change1-button">
          <button className="changeInfo-change1-button-1">Xác nhận</button>
        </div>
      </div>
      <div className="changeInfo-change2">
        <div className="changeInfo-change2-box">
          <p className="changeInfo-change2-text">Thay đổi nguyên nhân mất:</p>
          <select className="changeInfo-change2-select" placeholder="Nguyên nhân mất mới"></select>
        </div>
        <div className="changeInfo-change2-box">
          <p className="changeInfo-change2-text">Thay đổi địa điểm mai táng:</p>
          <select className="changeInfo-change2-select" placeholder="Địa điểm mai táng mới"></select>
        </div>
        <div className="changeInfo-change2-button">
          <button className="changeInfo-change2-button-1">Xác nhận</button>
        </div>
      </div>
    </div>
  )
}

// export default Home;