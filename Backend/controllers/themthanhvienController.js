const ThemthanhvienController = {
  async index(req, res) {
    const { lathanhviencu, ngayphatsinh, gioitinh, quequan, diachi, loaiquanhe, hovaten, ngaygiosinh, nghenghiep } = req.body;

    try {
      const pool = req.app.get('db');

      let [queQuanRows] = await pool.query(`SELECT MaQueQuan FROM quequan WHERE TenQueQuan = ?`, [quequan]);
      let maQueQuan = queQuanRows[0]?.MaQueQuan;

      let [loaiQuanHeRows] = await pool.query(`SELECT MaLoaiQuanHe FROM quanhe WHERE TenLoaiQuanHe = ?`, [loaiquanhe]);
      let maLoaiQuanHe = loaiQuanHeRows[0]?.MaLoaiQuanHe;

      let [ngheNghiepRows] = await pool.query(`SELECT MaNgheNghiep FROM nghenghiep WHERE TenNgheNghiep = ?`, [nghenghiep]);
      let maNgheNghiep = ngheNghiepRows[0]?.MaNgheNghiep;

      let [maThanhVienRows] = await pool.query(`SELECT get_next_ma_thanh_vien() AS MaThanhVien`);
      let maThanhVien = maThanhVienRows[0]?.MaThanhVien;

      if (!maQueQuan || !maLoaiQuanHe || !maThanhVien) {
        throw new Error('Không tìm thấy mã quê quán, mã loại quan hệ, hoặc không thể sinh mã thành viên mới');
      }

      // Thêm thành viên mới vào cơ sở dữ liệu
      const [rows] = await pool.query(`INSERT INTO thanhvien (MaThanhVien, LaThanhVienCu, MaLoaiQuanHe, NgayPhatSinhMoiQuanHe, HoVaTen, GioiTinh, NgayGioSinh, MaQueQuan, MaNgheNghiep, DiaChi)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [maThanhVien, lathanhviencu, maLoaiQuanHe, ngayphatsinh, hovaten, gioitinh, ngaygiosinh, maQueQuan, maNgheNghiep, diachi]);

      console.log([rows]);

      res.status(200).json({ message: 'Thêm thành viên thành công' });
    } catch (error) {
      console.error('Lỗi:', error);
      res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm thành viên' });
    }
  }
};

module.exports = ThemthanhvienController;
