let database = require("../database");

let signuppage = require(".public/index");
let username = signuppage.class="form-control form-control-lg".content

let authController = {
  login: (req, res) => {
    res.locals.page = "login"
    res.render('auth/login')
  },

  register: (req, res) => {
    res.render('auth/register')
    let userString = `${username}` ;
  },

  loginSubmit: (req, res) => {
    // implementa
  },

  registerSubmit: (req, res) => {
    // implement
    
    
  }
}

module.exports = authController;
