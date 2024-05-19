import React from "react";
import "./home.scss"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="addMembers-body">
      <div className="addMembers-body-oldMembers">
        <div className="addMembers-body-box">
          <p className="addMembers-body-box-text">Tên thành viên cũ</p>
          <input type="text" className="addMembers-body-box-input" />
        </div>
        <div className="addMembers-body-box">
          <p className="addMembers-body-box-text">Mã thành viên cũ</p>
          <input type="text" className="addMembers-body-box-input" />
        </div>
        <div className="addMembers-body-box">
          <p className="addMembers-body-box-text">Ngày phát sinh</p>
          <input type="date" className="addMembers-body-box-input" />
        </div>
        <div className="addMembers-body-box">
          <p className="addMembers-body-box-text">Loại quan hệ</p>
          <input type="text" className="addMembers-body-box-input" />
        </div>
      </div>
      <div className="addMembers-body-newMembers">
        <div className="addMembers-body-box">
          <p className="addMembers-body-box-text">Họ và tên</p>
          <input type="text" className="addMembers-body-box-input" />
        </div>
        <div className="addMembers-body-box">
          <p className="addMembers-body-box-text">Giới tính</p>
          <input type="text" className="addMembers-body-box-input" />
        </div>
        <div className="addMembers-body-box">
          <p className="addMembers-body-box-text">Ngày sinh</p>
          <input type="date" className="addMembers-body-box-input" />
        </div>
        <div className="addMembers-body-box">
          <p className="addMembers-body-box-text">Quê quán</p>
          <input type="text" className="addMembers-body-box-input" />
        </div>
        <div className="addMembers-body-box">
          <p className="addMembers-body-box-text">Nghề nghiệp</p>
          <input type="text" className="addMembers-body-box-input" />
        </div>
        <div className="addMembers-body-box">
          <p className="addMembers-body-box-text">Địa chỉ</p>
          <input type="text" className="addMembers-body-box-input" />
        </div>
      </div>
      <div className="addMembers-body-button">
        <button className="addMembers-body-button-add">Thêm</button>
      </div>
    </div>
  )
}

// export default Home;