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


module.exports = {
  onSignUp
}
