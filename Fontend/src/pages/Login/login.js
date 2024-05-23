import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./login.scss";

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", { username, password });
      if (response.data.message === "Success") {
        localStorage.setItem('token', response.data.token);
        navigate("/main");
      }
    } catch (err) {
      if (err.response) {
        const { status, data } = err.response;
        alert(data.message);
        if (status === 400 && data.message === "You are not registered to this service") {
          navigate("/register");
        }
      } else {
        console.error('Login error:', err);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="login-main">
      <div className="login-box">
        <h2 className="login-header"><center>Đăng nhập</center></h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-input">
            <label htmlFor="username">
              <strong>Tên đăng nhập</strong>
            </label>
            <input
              type="text"
              placeholder=''
              autoComplete='off'
              name='username'
              className='login-input-text'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-input">
            <label htmlFor="password">
              <strong>Mật khẩu</strong>
            </label>
            <input
              type="password"
              placeholder=''
              name='password'
              className='login-input-text'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Đăng nhập
          </button>
        </form>
        <div className="login-signup">
          <p className="login-signup-text">Bạn chưa có tài khoản? </p>
          <Link to="/register" className="login-signup-link">
            Đăng kí
          </Link>
        </div>
      </div>
    </div>
  );
};
