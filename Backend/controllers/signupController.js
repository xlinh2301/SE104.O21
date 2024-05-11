const CayGPSchema = require("../model/caygiapha")

class SignupController {
  index(req, res) {
    CayGPSchema.create(req.body)
      .then(employees => res.json(employees))
      .catch(err => res.json(err))
  }
}

module.exports = new SignupController