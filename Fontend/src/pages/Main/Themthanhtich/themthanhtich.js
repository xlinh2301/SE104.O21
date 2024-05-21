// src/AddAchievement.js

import React, { useState } from 'react';
import axios from 'axios';

const AddAchievement = () => {
  const [achievement, setAchievement] = useState('');

  const handleInputChange = (event) => {
    setAchievement(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://10.0.0.220:8080', { achievement });
      console.log(response.data); // Log response data from the server
      // Thêm logic xử lý thành công ở đây
    } catch (error) {
      console.error('Error adding achievement:', error);
      // Thêm logic xử lý lỗi ở đây
    }
  };

  return (
    <div>
      <h2>Add Achievement</h2>
      <input type="text" value={achievement} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddAchievement;
