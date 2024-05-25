// user.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './user.scss'; // Import SCSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export const User = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lấy thông tin người dùng từ localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUserData(storedUser);
    console.log(storedUser);
    setLoading(false);
  }, []);

  return (
    <div className="user-container">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="table-container">
          {userData ? (
            <div className="user-row">
              <div><strong>Name:</strong> {userData.name}</div>
              <div><strong>Username:</strong> {userData.username}</div>
              <div><strong>Email:</strong> {userData.email}</div>
            </div>
          ) : (
            <div>No user data available</div>
          )}
        </div>
      )}
    </div>
  );

};
