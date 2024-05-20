const ThemthanhtichController = {
  async index(req, res) {
    const { hoten, tenThanhTich } = req.body;
    const ngayphatsinh = new Date().toISOString().slice(0, 19).replace('T', ' ');

    console.log(req.body);
    console.log(hoten);
    console.log(tenThanhTich);


    try {
      const pool = req.app.get('db');

      const [rows] = await pool.query(`SELECT MaLoaiThanhTich FROM loaithanhtich WHERE TenLoaiThanhTich = ?`, [tenThanhTich]);
      console.log([rows])
      if (rows.length === 0) {
        res.status(404).json({ message: 'Loại thành tích không tồn tại' });
        return;
      }
      const maLoaiThanhTich = rows[0].MaLoaiThanhTich;

      // Sau đó, thêm bản ghi mới vào bảng thanhtich
      const query = `INSERT INTO thanhtich (HoVaTen, MaLoaiThanhTich, NgayPhatSinh) VALUES (?, ?, ?)`;
      await pool.query(query, [hoten, maLoaiThanhTich, ngayphatsinh]);

      res.status(200).json({ message: 'Thêm thành tích thành công' });
    } catch (error) {
      console.error('Lỗi:', error);
      res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm thành tích' });
    }
  }
};

module.exports = ThemthanhtichController;
