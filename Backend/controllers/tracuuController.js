const ThanhvienSchema = require("../model/thanhvien")

class tracuuController {
  async tracuu(req, res) {
    const { hoTen, maThanhVien } = req.body;
    try {
      const user = await ThanhvienSchema.findOne({ hoTen: hoTen, maThanhVien: maThanhVien });
      console.log(user)
      if (user) {
        res.json(user);
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = new tracuuController;