import React from 'react'
import './Header.scss'

function Header() {
  return (
    <div class="signup-header">
      <ul class="signup-nav">
        <li class="signup-nav-item">
          <a class="signup-nav-item-text active" aria-current="page" href="\">Trang chủ</a>
        </li>
        <li class="signup-nav-item">
          <a class="signup-nav-item-text" href=".\login">Cây</a>
        </li>
        <li class="signup-nav-item">
          <a class="signup-nav-item-text" href="#">Liên hệ</a>
        </li>
      </ul>

      <div class="signup-nav-login">
        <a class="signup-nav-login-text" href=".\login">Đăng nhập</a>
      </div>
    </div>
  )
}

export default Header;