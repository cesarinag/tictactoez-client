'use strict'

const store = require('./../store')



// create game success FUNCTION
const createGameSuccess = function (response) {
// console.log(response.game)
$('.thebayang').show()
$('#change-password').hide()
$('#message').text('Game Created!')

store.game = response.game
const gameObject = response.game
// console.log('Game Object: ', gameObject)

$('.notthebayang').hide()
$('.container').show()
$('#change-password').show()
$('.box').css('pointer-events', 'auto')

// $('.box').on('click', gameEvents.onBoardClick)
}
// create game failure function
const createGameFailure = function (error) {
  $('#message').text('No game for u ' + error.responseJSON.message)
}


// boardclick success function
const boardClickSuccess = function(response) {
  store.game = response.game
  const gameObject = store.game.cells
  // console.log(gameObject)
  // $('#message').text('Ya clicked it')
}

const boardClickFailure = function(response) {
  $('#message').text('error ' + error.JSON.message)
}


// game over success
const gameOverSuccess = function(response) {
store.game = response.game
const gameObject = store.game.cells
console.log('the game is over')

}
// game over failure
const gameOverFailure = function(response) {
  $('#message').text('error ' + error.JSON.message)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  boardClickSuccess,
  boardClickFailure
}
