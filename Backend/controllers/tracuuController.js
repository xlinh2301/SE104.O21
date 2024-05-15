const TracuuSchema = require("../model/tracuu")

class tracuuController {
  async tracuu(req, res) {
    const { hoTen, maSo } = req.query;
    try {
      const user = await TracuuSchema.findOne({ hoTen: hoTen, maThanhVien: maSo });
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