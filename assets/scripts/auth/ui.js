'use strict'

const store = require('./../store')

// signup success .then function
const signUpSuccess = function (response) {
  $('#message').text('Signed up like a boss!')
  $('form').trigger('reset')
}
// signup failure .catch function
const signUpFailure = function (error) {
  $('#message').text('Why u no sign up? ' + error.responseJSON.message)
}


module.exports = {
  signUpSuccess,
  signUpFailure
}
