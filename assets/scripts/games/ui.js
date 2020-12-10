'use strict'

const store = require('./../store')



// create game success FUNCTION
const createGameSuccess = function (response) {
// console.log(response.game)
$('.thebayang').show()
$('form').trigger('reset')
$('#message').text('Game Created!')

store.game = response.game
const gameObject = response.game
console.log('Game Object: ', gameObject)

$('.notthebayang').hide()
$('.container').show()

}
// create game failure function
const createGameFailure = function (error) {
  $('#message').text('No game for u ' + error.responseJSON.message)
}



// boardclick success function
const boardClickSuccess = function(response) {
  store.game = response.game
  $('#message').text('Ya clicked it')
}
// we dont need an error functionnnnnnnnnnnnnnnnnnn


module.exports = {
  createGameSuccess,
  createGameFailure,
  boardClickSuccess,
}
