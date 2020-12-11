'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store')



// create game function
const onCreateGame = function (event) {
  event.preventDefault()
api.createGame()
  .then(function (response) {
    return response
  })
    .then(ui.createGameSuccess)
  .catch(ui.createGameFailure)
}




// player clicks the board function
const onBoardClick = function (event) {
  // console.log('did u do the thing?')
// event target refers to the click on the baord, and which div's index
const cellIndex = $(event.target).data('cell-index')
// gets the array of cells from inside game comes from api
// console.log(cellIndex)
const gameArray = store.game.cells
// value in the specific position of game board
const value = gameArray[cellIndex]
// if space is empty
if (value === '') {

   // add player to board
   $(event.target).html(playerSpot)

   // update API
   api.boardClick(cellIndex, playerSpot)
     .then(ui.boardClickSuccess)

   // change turn
   if (playerSpot === 'X') {
     playerSpot = 'O'
   } else {
     playerSpot = 'X'
   }

// else space is taken
} else {
  $('#message').text('Spot taken pleighboi')
}
}


// if space is empty
// if (value === '') {
//
//    // add player to board
//    $(event.target).html(playerSpot)
//
//    // update API
//    api.boardClick(cellIndex, playerSpot)
//      .then(ui.boardClickSuccess)
//
//    // change turn
//    if (playerSpot === 'X') {
//      playerSpot = 'O'
//    } else {
//      playerSpot = 'X'
//    }
//
// // else space is taken
// } else {
//   $('#message').text('Spot taken pleighboi')
// }



// const player global variable
let playerSpot = 'X'




module.exports = {
  onCreateGame,
  playerSpot,
  onBoardClick
}
