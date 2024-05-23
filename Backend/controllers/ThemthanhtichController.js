const ThemthanhtichController = {
  async index(req, res) {
    const { hoten, loaithanhtich, tenthanhtich, ngayphatsinh } = req.body;

    console.log(req.body);

    try {
      const pool = req.app.get('db');

      // Lấy mã thành viên dựa trên họ và tên
      let [hoTenRows] = await pool.query(`SELECT MaThanhVien FROM thanhvien WHERE HoVaTen = ?`, [hoten]);
      let maThanhVien = hoTenRows[0]?.MaThanhVien;

      // Lấy mã loại thành tích dựa trên tên loại thành tích
      let [loaiThanhTichRows] = await pool.query(`SELECT MaLoaiThanhTich FROM loaithanhtich WHERE TenLoaiThanhTich = ?`, [loaithanhtich]);
      let maLoaiThanhTich = loaiThanhTichRows[0]?.MaLoaiThanhTich;

      // Kiểm tra nếu không tìm thấy thành viên hoặc loại thành tích
      if (!maThanhVien || !maLoaiThanhTich) {
        throw new Error('Không tìm thấy thành viên hoặc loại thành tích');
      }

      // Kiểm tra nếu đã có bản ghi trong ct_thanhtich
      let [ctThanhTichRows] = await pool.query(`SELECT * FROM ct_thanhtich WHERE MaLoaiThanhTich = ? AND MaThanhVien = ?`, [maLoaiThanhTich, maThanhVien]);
      let soLuong = ctThanhTichRows[0]?.SoLuong;
      let maCTThanhTich;

      if (soLuong != null) {
        // Nếu đã có bản ghi, cập nhật số lượng
        await pool.query(`UPDATE ct_thanhtich SET SoLuong = SoLuong + 1 WHERE MaLoaiThanhTich = ? AND MaThanhVien = ?`, [maLoaiThanhTich, maThanhVien]);
        maCTThanhTich = ctThanhTichRows[0].MaCTThanhTich;
      } else {
        // Nếu chưa có bản ghi, thêm mới
        const [insertCtThanhTichResult] = await pool.query(`INSERT INTO ct_thanhtich (MaLoaiThanhTich, SoLuong, MaThanhVien) VALUES (?, ?, ?)`, [maLoaiThanhTich, 1, maThanhVien]);
        maCTThanhTich = insertCtThanhTichResult.insertId;
      }

      // Thêm vào bảng thanhtich và lấy lại MaThanhTich
      await pool.query(`INSERT INTO thanhtich (TenThanhTich, MaLoaiThanhTich, NgayPhatSinh) VALUES (?, ?, ?)`, [tenthanhtich, maLoaiThanhTich, ngayphatsinh]);

      res.status(200).json({ message: 'Thêm thành tích thành công' });
    } catch (error) {
      console.error('Lỗi:', error);
      res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm thành tích' });
    }
  }
};

module.exports = ThemthanhtichController;
