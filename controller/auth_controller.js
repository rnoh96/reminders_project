let database = require("../database");

let authController = {
  login: (req, res) => {
    res.locals.page = "login"
    res.render('auth/login')
  },

  register: (req, res) => {
    res.render('auth/register')
  },

  loginSubmit: (req, res) => {
    // implementa
  },

  registerSubmit: (req, res) => {
    // implement
  }
}

module.exports = authController;
