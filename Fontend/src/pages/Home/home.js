import React, { useEffect } from 'react';
import "./home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);
  return (
    <div className="home">
      <div className="home-content">
        <h1>Xin chào đến với website quản lý cây gia phả</h1>
        <p className="description">
          Nơi lưu trữ và bảo mật thông tin cho thành viên gia đình bạn. Đừng để người thân của bạn dần bị lãng quên.
        </p>
        <div className="start-project">
          <Link to="/login">
            <button className="start-project-btn">Bắt đầu quản lý</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
