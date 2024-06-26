import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./signup.scss";

export const Signup = () => {
  useEffect(() => {
    document.title = "Đăng kí";
  }, []);
  const [name, setName] = useState('');
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !account || !password || !email) {
      console.log("All fields are required.");
      return;
    }

    axios.post("http://localhost:3001/register", { name, account, password, email })
      .then(result => {
        console.log(result);
        navigate("/login");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="signup">
      <div className="signup-body">
        <div className="signup-body-text">
          <p className="signup-body-text-1">Đăng kí tài khoản</p>
          <p className="signup-body-text-2">Sử dụng miễn phí hệ thống gia phả cho gia đình bạn</p>
        </div>
        <div className="signup-body-box">
          <form className="signup-body-box-1" onSubmit={handleSubmit}>
            <div className="signup-body-box-child">
              <label htmlFor="name">
                <p className='signup-body-box-child-text'>Họ tên</p>
              </label>
              <input type="text"
                placeholder=''
                autoComplete='off'
                name='name'
                className='signup-body-box-input'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="signup-body-box-child">
              <label htmlFor="account">
                <p className='signup-body-box-child-text'>Tài khoản đăng nhập</p>
              </label>
              <input type="text"
                placeholder=''
                autoComplete='off'
                name='account'
                className='signup-body-box-input'
                value={account}
                onChange={(e) => setAccount(e.target.value)}
              />
            </div>
            <div className="signup-body-box-child">
              <label htmlFor="password">
                <p className='signup-body-box-child-text'>Mật khẩu</p>
              </label>
              <input type="password"
                placeholder=''
                name='password'
                className='signup-body-box-input'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="signup-body-box-child">
              <label htmlFor="email">
                <p className='signup-body-box-child-text'>Email</p>
              </label>
              <input type="email"
                placeholder=''
                name='email'
                className='signup-body-box-input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="signup-body-box-button">
              Đăng kí
            </button>
          </form>
          <div className="signup-body-footer">
            <p className="signup-body-footer-text">Bạn đã có tài khoản?</p>
            <Link to="/login" className="signup-body-box-login">
              <p>Đăng nhập</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
