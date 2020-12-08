'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')
// use require without a reference to ensure a file is bundled
// require('./example')

// SHORTHAND FOR DOCUMENT READY WAITS FOR THE PAGE TO LOAD THEN RUNS THE GIVEN
// CALLBACK FUNCTION

$(() => {
  $('.thebayang').hide()
  // user sign-up listener
  $('#sign-up').on('submit', authEvents.onSignUp)
})
