const TracuuController = {
  async index(req, res) {
    const { hoTen } = req.body;

    console.log(req.body)

    if (!hoTen) {
      return res.status(400).json({ message: 'Họ Tên là bắt buộc' });
    }

    try {
      const pool = req.app.get('db');

      query = `
      SELECT tv.*, ds.*, qh.*, nn.*, qq.*
      FROM thanhvien tv
      JOIN danhsachthanhvien ds ON ds.MaThanhVien = tv.MaThanhVien
      JOIN quanhe qh ON qh.MaLoaiQuanHe = tv.MaLoaiQuanHe
      JOIN nghenghiep nn ON nn.MaNgheNghiep = tv.MaNgheNghiep
      JOIN quequan qq ON qq.MaQueQuan = tv.MaQueQuan
      LEFT JOIN thanhvien tv2 ON tv2.MaThanhVien = tv.MaThanhVienCu
      WHERE tv.HoVaTen = ?;
      `

      const [rows] = await pool.query(query, [hoTen]);
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
