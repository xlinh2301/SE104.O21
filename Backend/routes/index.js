// routes/index.js
const authenticateToken = require('../middleware/authenticateToken');

const loginRoute = require("./Login")
const signupRoute = require("./Signup")
const homeRoute = require("./Home")
const themthanhtichRoute = require("./Themthanhtich")
const ghinhanketthucRoute = require("./Ghinhanketthuc")
const themthanhvienRoute = require("./Themthanhvien")
const thaydoithongtinRoute = require("./Thaydoithongtin")
const caygiaphaRoute = require("./Caygiapha")
const lapbaocaoRoute = require("./Lapbaocao")
const tracuuRoute = require("./Tracuu")

function route(app) {
  app.use('/login', loginRoute)
  app.use('/register', signupRoute)
  app.use('/themthanhtich', authenticateToken, themthanhtichRoute)
  app.use('/themthanhvien', authenticateToken, themthanhvienRoute)
  app.use('/ghinhanketthuc', authenticateToken, ghinhanketthucRoute)
  app.use('/thaydoithongtin', authenticateToken, thaydoithongtinRoute)
  app.use('/caygiapha', authenticateToken, caygiaphaRoute)
  app.use('/lapbaocao', authenticateToken, lapbaocaoRoute)
  app.use('/tracuu', authenticateToken, tracuuRoute)
  app.use('/', authenticateToken, homeRoute)
}

module.exports = route;  