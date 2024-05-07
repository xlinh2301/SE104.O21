// controllers/loginControllers.js

const CayGPSchema = require("../model/caygiapha")

class LoginController {
  index(req, res) {
    const { email, password } = req.body;
    CayGPSchema.findOne({ email: email })

      .then(user => {
        if (user) {
          if (user.password === password) {
            res.json("Success")
          } else {
            res.json("The password is incorrect")
          }
        } else {
          res.json("No record existed")
        }
      })
      .catch(error => {
        console.error(error)
        res.status(500).json("Server error")
      })
  }
}

module.exports = new LoginController