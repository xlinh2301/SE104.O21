// routes/index.js

const loginRoute = require("./Login")
const signupRoute = require("./Signup")
const homeRoute = require("./Home")


function route(app) {
  app.use('/', homeRoute)
  app.use('/login', loginRoute)
  app.use('/register', signupRoute)
}

module.exports = route;  