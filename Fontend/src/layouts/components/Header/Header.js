import React from 'react'
import './Header.scss'

function Header() {
  return (
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
  )
}

export default Header;