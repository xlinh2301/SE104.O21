// routes/index.js

const loginRoute = require("./Login")
const signupRoute = require("./Signup")
const homeRoute = require("./Home")


function route(app) {
  app.use('/login', loginRoute)
  app.use('/register', signupRoute)
  app.use('/', homeRoute)
}

module.exports = route;  