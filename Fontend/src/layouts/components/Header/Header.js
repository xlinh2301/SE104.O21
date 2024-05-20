import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className="signup-header">
      <ul className="signup-nav">
        <li className="signup-nav-item">
          <a className="signup-nav-item-text active" aria-current="page" href="/">Trang chủ</a>
        </li>
        <li className="signup-nav-item">
          <a className="signup-nav-item-text" href="/login">Cây</a>
        </li>
        <li className="signup-nav-item">
          <a className="signup-nav-item-text" href="#">Liên hệ</a>
        </li>
      </ul>

      <div className="signup-nav-login">
        <a className="signup-nav-login-text" href="/login">Đăng nhập</a>
      </div>
    </div>
  );
}

export default Header;
