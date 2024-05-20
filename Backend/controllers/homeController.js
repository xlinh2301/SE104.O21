class HomeController {
  index(req, res) {
    res.send('home')
  }
}

module.exports = new HomeController