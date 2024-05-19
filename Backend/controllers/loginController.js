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
      const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username || null]);
      console.log([rows])

      // Nếu tìm thấy người dùng
      if (rows.length > 0) {
        const user = rows[0];
        console.log(user);
        // So sánh mật khẩu
        if (user.password === password) {
          console.log("OK")
          res.status(200).json({ message: 'Success' });
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }
}

module.exports = new LoginController();
