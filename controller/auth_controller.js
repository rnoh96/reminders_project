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
    let databaseString = `${username}` ;
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
<<<<<<< HEAD
=======
    // implement
    
>>>>>>> fcc2068edb2d1a9f5608f9798f5c9696d0f32ee2
    
  }
}

module.exports = authController;
