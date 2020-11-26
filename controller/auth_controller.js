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
    if (users[req.body.username] && users[req.body.username].password === req.body.password) {
      req.session['user']= req.body.username;
      res.redirect('/me');
    } else {
      res.redirect('/');
    }
  },

  registerSubmit: (req, res) => {
    // implement
  }
}

module.exports = authController;
