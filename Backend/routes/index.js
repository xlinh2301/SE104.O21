// routes/index.js

const loginRoute = require("./Login")
const signupRoute = require("./Signup")
const homeRoute = require("./Home")
const tracuuRoute = require("./Tracuu")

function route(app) {
  app.use('/login', loginRoute)
  app.use('/register', signupRoute)
  app.use('/', homeRoute)
  app.use('/tracuu', tracuuRoute)
}

module.exports = route;  