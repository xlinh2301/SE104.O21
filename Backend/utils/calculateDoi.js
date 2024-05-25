const calculateDoi = async (pool, loaiquanhemoi, tenThanhVienCu) => {
  let doiThanhVien = 0;
  let maThanhVienCu = -1;
  let tenChaHoacMe = -1;

  if (loaiquanhemoi === 'Con') {
    if (tenThanhVienCu) {
      let [rows] = await pool.query(`SELECT MaThanhVien, Doi FROM danhsachthanhvien WHERE HoVaTen = ?`, [tenThanhVienCu]);
      console.log([rows])
      if (rows.length > 0) {
        doiThanhVien = parseInt(rows[0]?.Doi, 10) + 1;
        tenChaHoacMe = tenThanhVienCu;
        maThanhVienCu = rows[0]?.MaThanhVien;
      } else {
        throw new Error('Không tìm thấy cha hoặc mẹ');
      }
    }
  } else if (loaiquanhemoi === 'Vợ/Chồng') {
    if (tenThanhVienCu) {
      let [rows] = await pool.query(`SELECT MaChaHoacMe, TenChaHoacMe, Doi FROM danhsachthanhvien WHERE HoVaTen = ?`, [tenThanhVienCu]);
      if (rows.length > 0) {
        doiThanhVien = parseInt(rows[0]?.Doi, 10);
        maThanhVienCu = rows[0]?.MaChaHoacMe;
        tenChaHoacMe = rows[0]?.TenChaHoacMe;
      }
    }
  }

  return { doiThanhVien, maThanhVienCu, tenChaHoacMe };
};

module.exports = calculateDoi;