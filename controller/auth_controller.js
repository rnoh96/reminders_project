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
    let loginInfo = req.body
    if(database.cindy.email == loginInfo.email) {
      if(database.cindy.password == loginInfo.password) {
        res.redirect('/reminders')
      }
    }

  },

  registerSubmit: (req, res) => {
    // implement
  }
}

module.exports = authController;
