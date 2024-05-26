const ThemthanhtichController = {
  async index(req, res) {
    const { mathanhvien, loaithanhtich, tenthanhtich, ngayphatsinh } = req.body;

    console.log(req.body);

    try {
      // Validate the date
      const date = new Date(ngayphatsinh);
      const today = new Date();
      if (isNaN(date.getTime()) || date > today) {
        return res.status(400).json({ message: 'Ngày phát sinh không hợp lệ' });
      }

      const pool = req.app.get('db');

      // Fetch the member's birth date
      let [birthDateRows] = await pool.query(`SELECT NgayGioSinh FROM thanhvien WHERE MaThanhVien = ?`, [mathanhvien]);
      let birthDate = birthDateRows[0]?.NgayGioSinh;

      if (!birthDate) {
        return res.status(400).json({ message: 'Không tìm thấy thành viên' });
      }

      birthDate = new Date(birthDate);
      if (date < birthDate) {
        return res.status(400).json({ message: 'Ngày phát sinh không được trước ngày sinh của thành viên' });
      }

      // Lấy mã loại thành tích dựa trên tên loại thành tích
      let [loaiThanhTichRows] = await pool.query(`SELECT MaLoaiThanhTich FROM loaithanhtich WHERE TenLoaiThanhTich = ?`, [loaithanhtich]);
      let maLoaiThanhTich = loaiThanhTichRows[0]?.MaLoaiThanhTich;

      // Kiểm tra nếu không tìm thấy loại thành tích
      if (!maLoaiThanhTich) {
        return res.status(400).json({ message: 'Không tìm thấy loại thành tích' });
      }

      // Kiểm tra nếu đã có bản ghi trong ct_thanhtich
      let [ctThanhTichRows] = await pool.query(`SELECT * FROM ct_thanhtich WHERE MaLoaiThanhTich = ? AND MaThanhVien = ?`, [maLoaiThanhTich, mathanhvien]);
      let soLuong = ctThanhTichRows[0]?.SoLuong;
      let maCTThanhTich;

      if (soLuong != null) {
        // Nếu đã có bản ghi, cập nhật số lượng
        await pool.query(`UPDATE ct_thanhtich SET SoLuong = SoLuong + 1 WHERE MaLoaiThanhTich = ? AND MaThanhVien = ?`, [maLoaiThanhTich, mathanhvien]);
        maCTThanhTich = ctThanhTichRows[0].MaCTThanhTich;
      } else {
        // Nếu chưa có bản ghi, thêm mới
        const [insertCtThanhTichResult] = await pool.query(`INSERT INTO ct_thanhtich (MaLoaiThanhTich, SoLuong, MaThanhVien) VALUES (?, ?, ?)`, [maLoaiThanhTich, 1, mathanhvien]);
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
