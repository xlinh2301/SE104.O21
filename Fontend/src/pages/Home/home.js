import React from "react";
// import "./home.scss"
import { Link } from "react-router-dom"
import { Caygiapha } from "../Main/Caygiapha/caygiapha";
import "../../pages/Main/Caygiapha/caygiapha.scss"


export const Home = () => {
  return (
    <div className="body">
      {/* <div className="nd">
        <p className="text">Lưu trữ và bảo mật thông tin cho thành viên gia đình bạn. Đừng để người thân của bạn dần bị lãng quên</p>

        <div class="input-email">
          <input type="text" class="input-email-here" placeholder="Nhập email của bạn"></input>
          <button class="button" type="button">Enter</button>
        </div>
      </div> */}
      <Caygiapha />
    </div>
  )
}

// export default Home; 