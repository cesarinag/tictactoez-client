const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')


// signup function
const onSignUp = function (event) {
// prevents page from refreshing because of submit
event.preventDefault()
// get data from form
// pass the form DOM object to getFormFields
// use event.target as the form
const form = event.target
const data = getFormFields(form)
api.signUp(data)
.then(ui.signUpSuccess)
.catch(ui.signUpFailure)
}

// sign in function
const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.signInFailure)
}

// sign out function
const onSignOut = function (event) {
  const form = event.target
  const data = getFormFields(form)

  api.signOut(data)
  .then(ui.signOutSuccess)
  .catch(ui.signOutFailure)
}

// change password functino
const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.changePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
