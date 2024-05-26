// controllers/thaydoithongtinController.js
const calculateDoi = require('../utils/calculateDoi');

const ThaydoithongtinController = {
  async search(req, res) {
    const { hoten, maThanhVien } = req.body;

    try {
      const pool = req.app.get('db');
      const [rows] = await pool.query(`
        SELECT * FROM thanhvien WHERE HoVaTen = ? AND MaThanhVien = ?`, [hoten, maThanhVien]);

      if (rows.length === 0) {
        return res.status(404).json({ message: 'Không tìm thấy thành viên' });
      }

      const [maThanhVienketThucRows] = await pool.query(`SELECT MaThanhVien From ketthuc WHERE MaThanhVien = ?`, [maThanhVien]);
      let maThanhVienketThuc = maThanhVienketThucRows[0]?.MaThanhVien;
      console.log("Mã thành viên người kết thúc: ", maThanhVienketThuc);

      let status = 'alive';

      if (maThanhVienketThuc) {
        status = 'dead';
      }

      res.status(200).json({ status });
    } catch (error) {
      console.error('Lỗi:', error);
      res.status(500).json({ message: 'Đã xảy ra lỗi khi tìm kiếm thành viên' });
    }
  },

  async update(req, res) {
    const { maThanhVien, nguyennhanmat, diadiemmaitang, mathanhviencu, loaiquanhemoi, quequanmoi, nghenghiepmoi } = req.body;

    console.log(req.body);

    try {
      const pool = req.app.get('db');

      if (req.body.status === 'dead') {
        let [maDiaDiemMaiTangRows] = await pool.query(`SELECT MaDiaDiemMaiTang FROM diadiemmaitang WHERE TenDiaDiemMaiTang = ?`, [diadiemmaitang]);
        let maDiaDiemMaiTang = maDiaDiemMaiTangRows[0]?.MaDiaDiemMaiTang;

        let [maNguyenNhanRows] = await pool.query(`SELECT MaNguyenNhan FROM nguyennhan WHERE TenNguyenNhan = ?`, [nguyennhanmat]);
        let maNguyenNhan = maNguyenNhanRows[0]?.MaNguyenNhan;
        await pool.query(`
          UPDATE ketthuc
          SET MaNguyenNhan = ?, MaDiaDiemMaiTang = ?
          WHERE MaThanhVien = ?`, [maNguyenNhan, maDiaDiemMaiTang, maThanhVien]);
      } else {
        let [queQuanRows] = await pool.query(`SELECT MaQueQuan FROM quequan WHERE TenQueQuan = ?`, [quequanmoi]);
        let maQueQuan = queQuanRows[0]?.MaQueQuan;

        let [loaiQuanHeRows] = await pool.query(`SELECT MaLoaiQuanHe FROM quanhe WHERE TenLoaiQuanHe = ?`, [loaiquanhemoi]);
        let maLoaiQuanHe = loaiQuanHeRows[0]?.MaLoaiQuanHe;

        let [ngheNghiepRows] = await pool.query(`SELECT MaNgheNghiep FROM nghenghiep WHERE TenNgheNghiep = ?`, [nghenghiepmoi]);
        let maNgheNghiep = ngheNghiepRows[0]?.MaNgheNghiep;

        let [tenThanhVienCuRows] = await pool.query(`SELECT HoVaTen FROM thanhvien WHERE MaThanhVien = ?`, [mathanhviencu]);
        let tenThanhVienCu = tenThanhVienCuRows[0]?.HoVaTen;

        const { doiThanhVien, maThanhVienCu, tenChaHoacMe } = await calculateDoi(pool, loaiquanhemoi, tenThanhVienCu);

        console.log("Đời: ", doiThanhVien)
        console.log("Mã thành viên cũ: ", maThanhVienCu)
        console.log("tên Cha Hoặc Mẹ: ", tenChaHoacMe)

        await pool.query(`
          UPDATE thanhvien
          SET MaLoaiQuanHe = ?, MaQueQuan = ?, MaNgheNghiep = ?, TenThanhVienCu = ?, MaThanhVienCu = ?
          WHERE MaThanhVien = ?`, [maLoaiQuanHe, maQueQuan, maNgheNghiep, tenThanhVienCu, maThanhVienCu, maThanhVien]);

        await pool.query(`
          UPDATE danhsachthanhvien
          SET TenChaHoacMe = ?, MaChaHoacMe = ?, Doi = ?  
          WHERE MaThanhVien = ?`, [tenChaHoacMe, maThanhVienCu, doiThanhVien, maThanhVien]);
      }

      res.status(200).json({ message: 'Cập nhật thông tin thành công' });
    } catch (error) {
      console.error('Lỗi:', error);
      res.status(500).json({ message: 'Đã xảy ra lỗi khi cập nhật thông tin' });
    }
  }
};

module.exports = ThaydoithongtinController;
