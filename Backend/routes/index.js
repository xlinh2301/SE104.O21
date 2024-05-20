// routes/index.js

const loginRoute = require("./Login")
const signupRoute = require("./Signup")
const homeRoute = require("./Home")
const themthanhtichRoute = require("./Themthanhtich")
const themthanhvienRoute = require("./Themthanhvien")
const tracuuRoute = require("./Tracuu")

function route(app) {
  app.use('/login', loginRoute)
  app.use('/register', signupRoute)
  app.use('/themthanhtich', themthanhtichRoute)
  app.use('/themthanhvien', themthanhvienRoute)
  app.use('/tracuu', tracuuRoute)
  app.use('/', homeRoute)
}

module.exports = route;  