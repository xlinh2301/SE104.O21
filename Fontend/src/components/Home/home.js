import React from "react";
import "./home.scss"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div id="background">
      <div class="header">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-item-text active" aria-current="page" href="\">Trang chủ</a>
          </li>
          <li class="nav-item">
            <a class="nav-item-text" href=".\login">Cây</a>
          </li>
          <li class="nav-item">
            <a class="nav-item-text" href="#">Liên hệ</a>
          </li>
        </ul>

        <div class="nav-login">
          <a class="nav-login-text" href=".\login">Đăng nhập</a>
        </div>

      </div>

      <div className="body">
        <div className="nd">
          <p className="text">Lưu trữ và bảo mật thông tin cho thành viên gia đình bạn. Đừng để người thân của bạn dần bị lãng quên</p>

          <div class="input-email">
            <input type="text" class="input-email-here" placeholder="Nhập email của bạn"></input>
            <div class="button-email">
              <button class="arrow-button" type="button">Enter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;