const LapbaocaoController = {
  async index(req, res) {
    const { startYear, endYear, type } = req.query;
    console.log(req.query);
    try {
      const pool = req.app.get('db');
      let query = '';
      let results = [];

      if (type === 'Tăng/Giảm') {
        // Lấy Số lượng sinh và kết hôn
        soLuongSinhKetHonQuery = `
          SELECT YEAR(NgayPhatSinhMoiQuanHe) as Nam, COUNT(MaLoaiQuanHe) as SoLuongQuanHe, MaLoaiQuanHe
          FROM thanhvien tv
          WHERE YEAR(NgayPhatSinhMoiQuanHe) BETWEEN ? AND ?
          GROUP BY YEAR(NgayPhatSinhMoiQuanHe), tv.MaLoaiQuanHe
          ORDER BY YEAR(NgayPhatSinhMoiQuanHe)
        `;

        const [soLuongSinhKetHonRows] = await pool.query(soLuongSinhKetHonQuery, [startYear, endYear]);

        console.log([soLuongSinhKetHonRows])
        // Lấy Số lượng mất
        soLuongMatQuery = `
          SELECT YEAR(NgayGioMat) AS Nam, COUNT(MaKetThuc) as SoLuongKetThuc, MaKetThuc
          FROM ketthuc kt
          WHERE YEAR(NgayGioMat) BETWEEN ? AND ?
          GROUP BY YEAR(NgayGioMat), kt.MaKetThuc
          ORDER BY YEAR(NgayGioMat)
        `;

        const [soLuongMatRows] = await pool.query(soLuongMatQuery, [startYear, endYear]);
        console.log([soLuongMatRows])

        // Merge results
        const mergedResults = {};

        // Process soLuongSinhKetHonRows
        for (const row of soLuongSinhKetHonRows) {
          if (!mergedResults[row.Nam]) {
            mergedResults[row.Nam] = {
              year: row.Nam,
              SoLuongQuanhe1: 0,
              SoLuongQuanhe2: 0,
              SoLuongQuanhe3: 0,
              death: 0
            };
          }
          if (row.MaLoaiQuanHe == 1) {
            mergedResults[row.Nam].SoLuongQuanhe1 += row.SoLuongQuanHe;
          } else if (row.MaLoaiQuanHe == 2) {
            mergedResults[row.Nam].SoLuongQuanhe2 += row.SoLuongQuanHe;
          } else if (row.MaLoaiQuanHe == 3) {
            mergedResults[row.Nam].SoLuongQuanhe3 += row.SoLuongQuanHe;
          }
        }

        // Process soLuongMatRows
        for (const row of soLuongMatRows) {
          if (!mergedResults[row.Nam]) {
            mergedResults[row.Nam] = {
              year: row.Nam,
              SoLuongQuanhe1: 0,
              SoLuongQuanhe2: 0,
              SoLuongQuanhe3: 0,
              death: row.SoLuongKetThuc
            };
          } else {
            mergedResults[row.Nam].death += row.SoLuongKetThuc;
          }
        }

        // Convert mergedResults object to array
        results = Object.values(mergedResults);

        // Kiểm tra nếu không có kết quả
        if (results.length === 0) {
          return res.status(404).json({ message: 'Không tìm thấy kết quả phù hợp' });
        }

      } else if (type === 'Thành tích') {
        query = `
          SELECT ltt.TenLoaiThanhTich as achievementType, COUNT(SoLuong) as count
          FROM ct_thanhtich cttt
          JOIN loaithanhtich ltt ON ltt.MaLoaiThanhTich = cttt.MaLoaiThanhTich
          JOIN thanhtich tt ON tt.MaLoaiThanhTich = ltt.MaLoaiThanhTich
          WHERE YEAR(tt.NgayPhatSinh) BETWEEN ? AND ?
          GROUP BY ltt.TenLoaiThanhTich
          ORDER BY ltt.TenLoaiThanhTich;
        `;
        [results] = await pool.query(query, [startYear, endYear]);

        // Kiểm tra nếu không có kết quả
        if (results.length === 0) {
          return res.status(404).json({ message: 'Không tìm thấy kết quả phù hợp' });
        }
      }

      res.json(results);
    } catch (error) {
      console.error('Error fetching report:', error);
      res.status(500).json({ message: 'Error fetching report' });
    }
  }
};

module.exports = LapbaocaoController;
