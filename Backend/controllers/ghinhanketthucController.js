const GhinhanketthucController = {
  async index(req, res) {
    const { hoten, mathanhvien, ngaygiomat, nguyennhan, diadiemmaitang } = req.body;

    try {
      const pool = req.app.get('db');

      // Lấy madiadiemmaitang
      let [maDiaDiemMaiTangRows] = await pool.query(`SELECT MaDiaDiemMaiTang FROM diadiemmaitang WHERE TenDiaDiemMaiTang = ?`, [diadiemmaitang]);
      let maDiaDiemMaiTang = maDiaDiemMaiTangRows[0]?.MaDiaDiemMaiTang;

      // Lấy manguyennhan
      let [maNguyenNhanRows] = await pool.query(`SELECT MaNguyenNhan FROM nguyennhan WHERE TenNguyenNhan = ?`, [nguyennhan]);
      let maNguyenNhan = maNguyenNhanRows[0]?.MaNguyenNhan;

      // Thêm vào bảng ketthuc
      await pool.query(`INSERT INTO ketthuc (HoVaTen, MaThanhVien, NgayGioMat, MaNguyenNhan, MaDiaDiemMaiTang) VALUES (?, ?, ?, ?, ?)`, [hoten, mathanhvien, ngaygiomat, maNguyenNhan, maDiaDiemMaiTang]);

      res.status(200).json({ message: 'Ghi nhận thành công!!' });
    } catch (error) {
      console.error('Lỗi:', error);
      res.status(500).json({ message: 'Đã xảy ra lỗi khi ghi nhận kết thúc' });
    }
  }
};

module.exports = GhinhanketthucController;
