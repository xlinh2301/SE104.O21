import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "./login.scss"

export const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/login", { email, password })
      .then(result => {
        console.log(result)
        if (result.data === "Success") {
          navigate("/main")
        } else {
          navigate("/register")
          alert("You are not registered to this service")

        }

      })
      .catch(err => console.log(err))
  }


  return (
    <div className="login-main">
      <div className="login-box">
        <h2 className="login-header"><center>Đăng nhập</center></h2>
        <form className="login-form" onSubmit={handleSubmit}>

          <div className="login-input">
            <label htmlFor="email">
              <strong>Tên đăng nhập</strong>
            </label>
            <input type="text"
              placeholder=''
              autoComplete='off'
              name='email'
              className='login-input-text'
              onChange={(e) => setEmail(e.target.value)}

            />
          </div>
          <div className="login-input">
            <label htmlFor="email">
              <strong>Mật khẩu</strong>
            </label>
            <input type="password"
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
}