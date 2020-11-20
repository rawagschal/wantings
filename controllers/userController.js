// login
// resgister
// profile page
// see orders

const {User} = require('../models')

 function getLogInPage(req, res, next) {
  res.render('login', {
    data: [1,2,3]
  })
}
async function registerUser(req, res, next) {
  console.log("in register user!");
  const email = req.body.email
  const password = req.body.password
  const response = await User.create({email, password})
  console.log(response);
  res.json(response)
}
function getRegistrationPage(req, res, next) {
  res.render('registration', {
    data: [1,2,3]
  })
}

module.exports = {getLogInPage, getRegistrationPage, registerUser} 

