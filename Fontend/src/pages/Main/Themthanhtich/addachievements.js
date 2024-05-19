import React from "react";
import "./addachievements.scss"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="addAchieviements-body">
      <div className="addAchieviements-body-container">
        <div className="addAchieviements-body-container-box">
          <p className="addAchieviements-body-container-box-text">Họ và tên</p>
          <input type="text" className="addAchieviements-body-container-box-input" />
        </div>
        <div className="addAchieviements-body-container-box">
          <p className="addAchieviements-body-container-box-text">Mã thành viên</p>
          <input type="text" className="addAchieviements-body-container-box-input" />
        </div>
        <div className="addAchieviements-body-container-box">
          <p className="addAchieviements-body-container-box-text">Loại thành tích</p>
          <input type="text" className="addAchieviements-body-container-box-input" />
        </div>
        <div className="addAchieviements-body-container-box">
          <p className="addAchieviements-body-container-box-text">Ngày phát sinh</p>
          <input type="date" className="addAchieviements-body-container-box-input" />
        </div>
      </div>
      <button className="addAchieviements-body-button">Thêm</button>
    </div>
  )
}

// export default Home;