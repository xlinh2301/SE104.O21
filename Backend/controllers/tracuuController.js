const TracuuController = {
  async index(req, res) {
    const { hoTen } = req.body;

    console.log(req.body)

    if (!hoTen) {
      return res.status(400).json({ message: 'Họ Tên là bắt buộc' });
    }

    try {
      const pool = req.app.get('db');

      const [rows] = await pool.query(`SELECT * FROM danhsachthanhvien WHERE HoVaTen = ?`, [hoTen]);
      console.log([rows])

      if (rows.length > 0) {
        res.status(200).json(rows);
      } else {
        res.status(404).json({ message: 'Không tìm thấy thành viên' });
      }
    } catch (error) {
      console.error('Lỗi:', error);
      res.status(500).json({ message: 'Đã xảy ra lỗi khi tra cứu thành viên' });
    }
  }
};

module.exports = TracuuController;
