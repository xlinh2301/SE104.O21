const ThemthanhvienController = {
  async index(req, res) {
    const { tenthanhviencu, ngayphatsinh, gioitinh, quequan, diachi, loaiquanhe, hovaten, ngaygiosinh, nghenghiep } = req.body;

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

      console.log("Mã quê quán", maQueQuan);
      console.log("Mã loại quan hệ", maLoaiQuanHe);

      // Nếu loại quan hệ là Con hoặc Gốc thì cần kiểm tra xem có cha hoặc mẹ không
      let doiChaMe = 0;
      let mathanhviencu = null;
      let tenChaHoacMe = null;
      let doiChaHoacMe = 0;

      if (loaiquanhe === 'Con') {
        if (tenthanhviencu) {
          let [mathanhviencuRows] = await pool.query(`SELECT MaThanhVien, Doi FROM danhsachthanhvien WHERE HoVaTen = ?`, [tenthanhviencu]);
          if (mathanhviencuRows.length > 0) {
            mathanhviencu = mathanhviencuRows[0]?.MaThanhVien;
            doiChaMe = mathanhviencuRows[0]?.Doi;
            tenChaHoacMe = tenthanhviencu;
          } else {
            throw new Error('Không tìm thấy cha hoặc mẹ');
          }
        }
      } else if (loaiquanhe === 'Vợ/Chồng') {
        if (tenthanhviencu) {
          let [mathanhviencuRows] = await pool.query(`SELECT MaChaHoacMe, Doi FROM danhsachthanhvien WHERE HoVaTen = ?`, [tenthanhviencu]);
          if (mathanhviencuRows.length > 0) {
            mathanhviencu = mathanhviencuRows[0]?.MaChaHoacMe;
            doiChaMe = mathanhviencuRows[0]?.Doi;
          }
        }
      }
      console.log(mathanhviencu)

      if (loaiquanhe === 'Vợ/Chồng') {
        if (tenthanhviencu) {
          // Nếu là vợ/chồng và có thành viên cũ, lấy mã của thành viên cũ và tăng đời lên 1
          let [mathanhviencuRows] = await pool.query(`SELECT HoVaTen, Doi FROM danhsachthanhvien WHERE MaThanhVien = ?`, [mathanhviencu]);
          if (mathanhviencuRows.length > 0) {
            tenChaHoacMe = mathanhviencuRows[0]?.HoVaTen;
            doiChaHoacMe = mathanhviencuRows[0]?.Doi;
          }
          console.log([mathanhviencuRows])
        }
      }

      if (!maQueQuan || !maLoaiQuanHe) {
        throw new Error('Không tìm thấy mã quê quán hoặc mã loại quan hệ');
      }

      // Tính giá trị cho cột Doi
      let doiThanhVien;
      if (loaiquanhe === 'Con') {
        doiThanhVien = doiChaMe + 1;
      } else if (loaiquanhe === 'Vợ/Chồng') {
        if (tenChaHoacMe) {
          doiThanhVien = doiChaHoacMe + 1;
        } else {
          doiThanhVien = 0;
        }
      } else {
        doiThanhVien = 0;
      }

      console.log("Đời: ", doiThanhVien)
      console.log("Tên cha hoặc mẹ: ", tenChaHoacMe)
      console.log("Đời cha hoặc mẹ: ", doiChaHoacMe)

      // Thêm thành viên mới vào bảng thanhvien
      const [thanhVienRows] = await pool.query(
        `INSERT INTO thanhvien (MaLoaiQuanHe, NgayPhatSinhMoiQuanHe, HoVaTen, GioiTinh, NgayGioSinh, MaQueQuan, MaNgheNghiep, DiaChi, TenThanhVienCu)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [maLoaiQuanHe, ngayphatsinh, hovaten, gioitinh, ngaygiosinh, maQueQuan, maNgheNghiep, diachi, tenthanhviencu]
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
