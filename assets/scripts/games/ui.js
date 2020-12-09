'use strict'

const store = require('./../store')



// create game success FUNCTION
const createGameSuccess = function (event) {
console.log(response.data)
$('.thebayang').show()
$('#message').text('Game Created!')
$('.notthebayang').hide()
}

// create game failure function
const createGameFailure = function (error) {
  $('#message').text('No game for u ' + error.responseJSON.message)
}





module.exports = {
  createGameSuccess,
  createGameFailure
}
