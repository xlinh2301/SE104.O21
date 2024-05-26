const GhinhanketthucController = {
  async index(req, res) {
    const { hoten, mathanhvien, ngaygiomat, nguyennhan, diadiemmaitang } = req.body;
    if (!hoten || !mathanhvien || !ngaygiomat || !nguyennhan || !diadiemmaitang) {
      return res.status(400).json({ message: 'Vui lòng cung cấp đầy đủ thông tin' });
    }

    try {
      const pool = req.app.get('db');

      // Validate the date of death
      const dateOfDeath = new Date(ngaygiomat);
      if (isNaN(dateOfDeath.getTime())) {
        return res.status(400).json({ message: 'Ngày giờ mất không hợp lệ' });
      }

      // Fetch the member's birth date
      let [birthDateRows] = await pool.query(`SELECT NgayGioSinh FROM thanhvien WHERE MaThanhVien = ?`, [mathanhvien]);
      let birthDate = birthDateRows[0]?.NgayGioSinh;

      if (!birthDate) {
        return res.status(400).json({ message: 'Không tìm thấy thành viên' });
      }

      birthDate = new Date(birthDate);
      if (dateOfDeath < birthDate) {
        return res.status(400).json({ message: 'Ngày giờ mất không được trước ngày sinh của thành viên' });
      }

      // Check if the member has already been recorded in the ketthuc table
      let [maThanhVienRows] = await pool.query(`SELECT MaThanhVien FROM ketthuc WHERE MaThanhVien = ?`, [mathanhvien]);
      if (maThanhVienRows.length > 0) {
        return res.status(400).json({ message: 'Thành viên này đã được ghi nhận kết thúc' });
      }

      // Get MaDiaDiemMaiTang
      let [maDiaDiemMaiTangRows] = await pool.query(`SELECT MaDiaDiemMaiTang FROM diadiemmaitang WHERE TenDiaDiemMaiTang = ?`, [diadiemmaitang]);
      if (maDiaDiemMaiTangRows.length === 0) {
        return res.status(400).json({ message: 'Địa điểm mai táng không tồn tại' });
      }
      let maDiaDiemMaiTang = maDiaDiemMaiTangRows[0]?.MaDiaDiemMaiTang;

      // Get MaNguyenNhan
      let [maNguyenNhanRows] = await pool.query(`SELECT MaNguyenNhan FROM nguyennhan WHERE TenNguyenNhan = ?`, [nguyennhan]);
      if (maNguyenNhanRows.length === 0) {
        return res.status(400).json({ message: 'Nguyên nhân không tồn tại' });
      }
      let maNguyenNhan = maNguyenNhanRows[0]?.MaNguyenNhan;

      // Insert into ketthuc table
      await pool.query(`INSERT INTO ketthuc (HoVaTen, MaThanhVien, NgayGioMat, MaNguyenNhan, MaDiaDiemMaiTang) VALUES (?, ?, ?, ?, ?)`, [hoten, mathanhvien, ngaygiomat, maNguyenNhan, maDiaDiemMaiTang]);

      res.status(200).json({ message: 'Ghi nhận thành công!' });
    } catch (error) {
      console.error('Lỗi:', error);
      res.status(500).json({ message: 'Đã xảy ra lỗi khi ghi nhận kết thúc' });
    }
  }
};

module.exports = GhinhanketthucController;
