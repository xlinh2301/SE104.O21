const ThemthanhvienController = {
  async index(req, res) {
    const { mathanhvien, hoten, gioitinh, ngaygiosinh, maquequan, manghenghiep, diachi, mathanhviencu, maloaiquanhe, ngayphatsinh } = req.body;

    // console.log(req.body);
    // console.log(hoten);
    // console.log(gioitinh);


    try {
      const pool = req.app.get('db');

      const [rows] = await pool.query(`INSERT INTO thanhvien (MaThanhVien, HoVaTen, GioiTinh, NgayGioSinh, MaQueQuan, MaNgheNghiep, DiaChi, MaThanhVienCu, MaLoaiQuanHe, NgayPhatSinh) VALUES (?,?,?,?,?,?,?,?,?,?)`, [mathanhvien, hoten, gioitinh, ngaygiosinh, maquequan, manghenghiep, diachi, mathanhviencu, maloaiquanhe, ngayphatsinh]);
      console.log([rows])

      res.status(200).json({ message: 'Thêm thành viên thành công' });
    } catch (error) {
      console.error('Lỗi:', error);
      res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm thành viên' });
    }
  }
};

module.exports = ThemthanhvienController;
