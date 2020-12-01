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
    if (database["cindy"].username == req.body.username && database["cindy"].password === req.body.password) {
      req.session['user']= req.body.username;
      res.render('reminder/index', { reminders: database.cindy.reminders });
    } else {
      res.redirect('/');
    }
  },

  registerSubmit: (req, res) => {
    
  }
}

module.exports = authController;
