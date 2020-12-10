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
  // console.log(store)

  $('.notthebayang').hide()
  $('.thebayang').show()
  $('form').trigger('reset')
}

// signin failure .catch function
const signInFailure = function (error) {
  $('#message').text('Sign in no bueno with error: ' + error.responseJSON.message)
}

// signout success .then function
const signOutSuccess = function () {
  $('#message').text('Signed out successfully!')
$('.notthebayang').show()
  $('.thebayang').hide()
// VERY IMMPORTANT
store.user = null
// reset form on any successful action:
$('form').trigger('reset')
}

// signout failure .catch message
const signOutFailure = function (error) {
  $('#message').text('For why u no sign out? ' + error.responseJSON.message)
}


// change password success .then function
const changePasswordSuccess = function (response) {
  $('#message').text('You changed up on me dawg')
  $('form').trigger('reset')
  $('.thebayang').show()
$('.notthebayang').hide()
}

// change password failure .catch function
const changePasswordFailure = function (response) {
  $('#message').text('It no work compadre ' + error.responseJSON.message)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
