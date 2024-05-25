// controllers/themthanhvienController.js
const calculateDoi = require('../utils/calculateDoi');

const ThemthanhvienController = {
  async index(req, res) {
    const { mathanhviencu, ngayphatsinh, gioitinh, quequan, diachi, loaiquanhe, hovaten, ngaygiosinh, nghenghiep } = req.body;

    console.log(req.body);

    try {
      const pool = req.app.get('db');

      // Truy vấn các mã từ bảng liên quan
      let [queQuanRows] = await pool.query(`SELECT MaQueQuan FROM quequan WHERE TenQueQuan = ?`, [quequan]);
      let maQueQuan = queQuanRows[0]?.MaQueQuan;

      let [loaiQuanHeRows] = await pool.query(`SELECT MaLoaiQuanHe FROM quanhe WHERE TenLoaiQuanHe = ?`, [loaiquanhe]);
      let maLoaiQuanHe = loaiQuanHeRows[0]?.MaLoaiQuanHe;

      let [ngheNghiepRows] = await pool.query(`SELECT MaNgheNghiep FROM nghenghiep WHERE TenNgheNghiep = ?`, [nghenghiep]);
      let maNgheNghiep = ngheNghiepRows[0]?.MaNgheNghiep;

      let [maThanhVienCuRows] = await pool.query(`SELECT HoVaTen FROM thanhvien WHERE MaThanhVien = ?`, [mathanhviencu]);
      let tenthanhviencu = maThanhVienCuRows[0]?.HoVaTen;

      console.log("Mã quê quán", maQueQuan);
      console.log("Mã loại quan hệ", maLoaiQuanHe);
      console.log("Tên thành viên cũ", tenthanhviencu);

      const { doiThanhVien, maThanhVienCu, tenChaHoacMe } = await calculateDoi(pool, loaiquanhe, tenthanhviencu);

      if (!maQueQuan || !maLoaiQuanHe) {
        throw new Error('Không tìm thấy mã quê quán hoặc mã loại quan hệ');
      }

      console.log("Đời: ", doiThanhVien);
      console.log("Tên cha hoặc mẹ: ", tenChaHoacMe);

      // Thêm thành viên mới vào bảng thanhvien
      const [thanhVienRows] = await pool.query(
        `INSERT INTO thanhvien (MaLoaiQuanHe, NgayPhatSinhMoiQuanHe, HoVaTen, GioiTinh, NgayGioSinh, MaQueQuan, MaNgheNghiep, DiaChi, MaThanhVienCu, TenThanhVienCu)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [maLoaiQuanHe, ngayphatsinh, hovaten, gioitinh, ngaygiosinh, maQueQuan, maNgheNghiep, diachi, mathanhviencu, tenthanhviencu]
      );

      // Lấy ID của thành viên vừa thêm
      let maThanhVienMoi = thanhVienRows.insertId;

      // Thêm thành viên mới vào bảng danhsachthanhvien
      const [DSThanhVienRows] = await pool.query(
        `INSERT INTO danhsachthanhvien (HoVaTen, NgaySinh, Doi, TenChaHoacMe, MaChaHoacMe, MaThanhVien)
        VALUES (?, ?, ?, ?, ?, ?)`,
        [hovaten, ngaygiosinh, doiThanhVien, tenChaHoacMe, mathanhviencu, maThanhVienMoi]
      );

      console.log([thanhVienRows, DSThanhVienRows]);

      res.status(200).json({ message: 'Thêm thành viên thành công' });
    } catch (error) {
      console.error('Lỗi:', error);
      res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm thành viên' });
    }
  }
};

module.exports = ThemthanhvienController;
