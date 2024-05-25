import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

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
      </ul>

      <div className="signup-nav-login">
        <Link to='/login' className="signup-nav-login-text">
          Đăng nhập
        </Link>
      </div>
    </div>
  );
}

export default Header;
