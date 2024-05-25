const UserController = {
  async index(req, res) {
    try {
      const pool = req.app.get('db');

      const [rows] = await pool.query(`SELECT * FROM users`);
      console.log([rows])

      if (rows.length > 0) {
        res.status(200).json(rows);
      } else {
        res.status(404).json({ message: 'Lỗi' });
      }
    } catch (error) {
      console.error('Lỗi:', error);
      res.status(500).json({ message: 'Đã xảy ra lỗi' });
    }
  }
};

module.exports = UserController;
