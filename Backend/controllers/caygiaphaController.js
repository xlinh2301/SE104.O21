const CaygiaphaController = {
  async index(req, res) {
    const { } = req.body;

    try {
      const pool = req.app.get('db');

      let results = [];

      query = `
      SELECT tv.*, ds.*, qh.*, nn.*, qq.*
      FROM thanhvien tv
      JOIN danhsachthanhvien ds ON ds.MaThanhVien = tv.MaThanhVien
      JOIN quanhe qh ON qh.MaLoaiQuanHe = tv.MaLoaiQuanHe
      JOIN nghenghiep nn ON nn.MaNgheNghiep = tv.MaNgheNghiep
      JOIN quequan qq ON qq.MaQueQuan = tv.MaQueQuan
      LEFT JOIN thanhvien tv2 ON tv2.MaThanhVien = tv.MaThanhVienCu
      `

      const [rows] = await pool.query(query);

      console.log([rows])
      res.status(200).json(rows);
    } catch (error) {
      console.error('Lỗi:', error);
      res.status(500).json({ message: 'Đã xảy ra lỗi khi ghi nhận kết thúc' });
    }
  }
};

module.exports = CaygiaphaController;
