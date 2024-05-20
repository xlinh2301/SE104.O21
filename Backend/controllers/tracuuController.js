const TracuuController = {
  async index(req, res) {
    const { hoTen, maSo } = req.body;

    console.log(req.body)

    try {
      const pool = req.app.get('db');

      const [rows] = await pool.query(`SELECT * FROM thanhvien WHERE HoVaTen = ? AND MaThanhVien = ?`, [hoTen, maSo]);
      console.log([rows])

      if (rows.length > 0) {
        res.status(200).json(rows[0]);
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
