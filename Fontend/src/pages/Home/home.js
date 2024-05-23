import React from "react";
import "./home.scss"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="home_body">
      <div className="home_body-nd">
        <p className="home_body-nd-text">Lưu trữ và bảo mật thông tin cho thành viên gia đình bạn. Đừng để người thân của bạn dần bị lãng quên.</p>
        <div className="home_body-nd-box">
          <input type="text" className="home_body-nd-box-search" placeholder="Email của bạn" />
          <button className="home_body-nd-box-btn">Enter</button>
        </div>
      </div>
    </div>
  )
}
// export default Home;