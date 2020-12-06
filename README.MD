Reminder App
Developed by Ryan Noh, Ian Lee, Allan Du, Brent Lee

reminders_project
 ┣ controller
 ┃ ┣ auth_controller.js
 ┃ ┗ reminder_controller.js
 ┣ public
 ┃ ┣ index.html
 ┃ ┣ script.js
 ┃ ┗ style.css
 ┣ views
 ┃ ┣ auth
 ┃ ┃ ┣ login.ejs
 ┃ ┃ ┗ register.ejs
 ┃ ┣ partials
 ┃ ┃ ┗ navbar.ejs
 ┃ ┣ reminder
 ┃ ┃ ┣ create.ejs
 ┃ ┃ ┣ edit.ejs
 ┃ ┃ ┣ index.ejs
 ┃ ┃ ┗ single-reminder.ejs
 ┃ ┣ layout.ejs
 ┃ ┗ .DS_Store
 ┣ .DS_Store
 ┣ .gitignore
 ┣ database.js
 ┣ index.js
 ┣ package-lock.json
 ┗ package.json
 
 To be finished:
 1. Have a database that can be added to through the registration page:
 How we would finish: 
 2. When you enter your email and press sign up, it should take you to the register page, with the user's email already filled out for them
  :How we would finish: Grab the input text from the landing page, then using ejs render, render the text in the registration page. In the form field.
 3. Application should have a way to add friends and display their reminders in your list of reminders.
  :How we would finish:
 
 installation instructions: download the code files as a zip file. Export the folder. Install npm in the root folder. Then run npm start.
