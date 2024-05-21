const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { promisify } = require('util');

class LoginController {
  async index(req, res) {
    try {
      const pool = req.app.get('db');
      const { username, password } = req.body;

      console.log(username)
      console.log(password)

      if (!username) {
        return res.status(400).json("Username is required");
      }

      // Thực hiện truy vấn để tìm kiếm người dùng với username tương ứng
      const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
      console.log([rows])

      if (rows.length === 0) {
        return res.status(400).json("No record existed");
      }

      const user = rows[0];
      console.log(user.password)

      const passwordIsValid = (password === user.password ? true : false)

      console.log(passwordIsValid)

      if (!passwordIsValid) {
        return res.status(400).json("The password is incorrect");
      }

      // Generate JWT token
      const token = jwt.sign({ id: user.id, username: user.username }, '123', {
        expiresIn: '1h', // Token expires in 1 hour
      });

      // Respond with token
      res.status(200).json({ message: 'Success', token });
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }
}

module.exports = new LoginController();
