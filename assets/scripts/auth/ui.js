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


// signin sucess .then function
const signInSuccess = function (response) {
  $('#message').text('Signed in like pen!')
  // console.log(store)

  store.user = response.user
  console.log(store)

  $('.notthebayang').hide()
  $('.thebayang').show()
  $('form').trigger('reset')
}

// signin failure .catch function
const signInFailure = function (error) {
  $('#message').text('Sign in no bueno with error: ' + error.responseJSON.message)
}

// signout success .then function
const signOutSuccess = function (response) {
  $('#message').text('Signed out successfully!')
  $('.thebayang').show()
$('.notthebayang').hide()
// VERY IMMPORTANT
store.user = null
// reset form on any successful action:
$('form').trigger('reset')
}

// signout failure .catch message
const signOutFailure = function (error) {
  $('#message').text('For why u no sign out? ' + error.responseJSON.message)
}


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
