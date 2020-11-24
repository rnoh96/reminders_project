const Database = require("../database");
let database = require("../database");

let remindersController = {
  // Show a list of reminders
  list: (req, res) => {
    res.locals.page = "list"
    res.render('reminder/index', { reminders: database.cindy.reminders })
  },

  // Show a Create Reminder Page
  new: (req, res) => {
    res.render('reminder/create')
  },

  // Show the details of a Single Reminder
  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    if (searchResult != undefined) {
      res.render('reminder/single-reminder', { reminderItem: searchResult })
    } else {
      res.render('reminder/index', { reminders: database.cindy.reminders })
    }
  },

  // Create a reminder
  // ⚠️ TODO: Currently hardcoded to always create a reminder for Cindy only. You need to make this dynamic. 
  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false
    }
    database.cindy.reminders.push(reminder);
    res.redirect('/reminders');
  },

  // Show the Edit Reminder Page
  edit: (req, res) => {
    // ⭐️ your implementation here ⭐️
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
      res.render('reminder/edit', { reminderItem: searchResult })
    
  },

  // Edit the Reminder
  update: (req, res) => {
    // ⭐️ your implementation here ⭐️
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })

    let editIndex = database.cindy.reminders.indexOf(searchResult);

    let reminderEdit = {
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed
    }

    database.cindy.reminders[editIndex].title = reminderEdit.title
    database.cindy.reminders[editIndex].description = reminderEdit.description
    database.cindy.reminders[editIndex].completed = Boolean(reminderEdit.completed)
    
    res.redirect('/reminders');

  },

  // Delete the Reminder
  delete: (req, res) => {
    // ⭐️ your implementation here ⭐️
    let reminderToDelete = req.params.id;
    //finding the reminder
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToDelete;
    })
      let deleteIndex = database.cindy.reminders.indexOf(searchResult);
    //find the index of it

    //removes index from the list
      database.cindy.reminders.splice(deleteIndex,1);
      res.redirect('/reminders');
  },

  // get login page
  login: (req, res) => {
    res.r('/login')
  }
}

module.exports = remindersController;
