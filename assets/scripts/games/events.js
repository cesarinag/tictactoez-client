'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store')
const winCombinations =
[
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[6, 4, 2],
[8, 4, 0]
]
// const player global variable
let playerSpot = 'X'



// create game function
const onCreateGame = function (event) {
  $('.box').html('')
  // prevent defsault action
  event.preventDefault()
  // playerSpot starts as x
  // redefines this variable
  playerSpot = 'X'
  // log that info to api
api.createGame()
  // then run these sucesss and failure functions dawg
    .then(ui.createGameSuccess)
    // .then(gameOver)
  .catch(ui.createGameFailure)
  // create if statement that includes the .then and .catch functions
  // maybe include the
}





// game array behind logic
// passing the winCombinations array
const checkWin = function () {
  // check to see if someone is home (if spot is occupied)
  const somebodyHome = (playerSpot) => playerSpot !== ''
  // if someone is home, log that pls
  const gameArray = store.game.cells
  const isItDone = store.game.over
  // is it x if its not x then o if its o then its x (reiterating here because why not)
  playerSpot = playerSpot === 'X' ? 'O' : 'X'
$('#message').text(playerSpot + '  turn')
  // Row 1 Win:
  if (gameArray[0] !== '' && gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2]) {
    // console.log('Row 1 Win!')
    $('#message').text('ya did the dang thing row 1')
    store.game.over = true
    return true
    $('.box').css('pointer-events', 'none')
    // Row 2 Win:
  } else if (gameArray[3] !== '' && gameArray[3] === gameArray[4] && gameArray[3] === gameArray[5]) {
    // console.log('Row 2 Win!')
    $('#message').text('ya did the dang thing row 2')
    store.game.over = true
    return true
$('.box').css('pointer-events', 'none')
    // Row 3 Win:
  } else if (gameArray[6] !== '' && gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8]) {
    // console.log('Row 3 Win!')
    $('#message').text('ya did the dang thing row 3')
    store.game.over = true
    return true
    $('.box').css('pointer-events', 'none')
    // Column 1 Win:
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[3] && gameArray[0] === gameArray[6]) {
    // console.log('Column 1 Win!')
    $('#message').text('ya did the dang thing column 1')
    store.game.over = true
    return true
    $('.box').css('pointer-events', 'none')
    // Column 2 Win:
  } else if (gameArray[1] !== '' && gameArray[1] === gameArray[4] && gameArray[1] === gameArray[7]) {
    // console.log('Column 2 Win!')
    $('#message').text('ya did the dang thing column 2')
    store.game.over = true
    return true
    $('.box').css('pointer-events', 'none')
    // Column 3 Win:
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[5] && gameArray[2] === gameArray[8]) {
    // console.log('Column 3 Win!')
    $('#message').text('ya did the dang thing column 3')
    store.game.over = true
    return true
    $('.box').css('pointer-events', 'none')
    // Diagonal Top-Left to Bottom-Right Win
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[4] && gameArray[0] === gameArray[8]) {
    // console.log('Diagonal Win!')
    $('#message').text('ya did the dang thing diagonally tho')
    store.game.over = true
    return true
    $('.box').css('pointer-events', 'none')
    // Diagonal Top-Right to Bottom-Left Win (or visa-versa)
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[4] && gameArray[2] === gameArray[6]) {
    // console.log('Diagonal Win!')
    $('#message').text('ya did the dang thing diagonally tho')
    store.game.over = true
    return true
    $('.box').css('pointer-events', 'none')
  // checks for every cell that is occupied
} else if (gameArray.every(somebodyHome) === true) {
    store.game.over = true
    // issa tie
    $('#message').text('issa tie')
    // console.log('TIE!')
      // otherwise it is over
      return true
      $('.box').css('pointer-events', 'none')
    } else {
      return false
    }
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
      .then(checkWin)
      .then((winLose) => {
        if (winLose) {
          gameOver()
        } else {
          if (playerSpot == 'X') {
           playerSpot == 'O'
          } else {
           playerSpot == 'X'
          }
        }
      })
      .catch(ui.boardClickFailure)
} else {
  // else space is taken
  // console.log('i ran the onclickboard function')
$('#message').text('spot taken pleighboi')
}
}








//  gameOver function receives gameWon function
const gameOver = function (gameWon) {
  // clear the board
  $('.box').css('pointer-events', 'none')

  api.gameOver()
  .then(ui.gameOverSuccess)
  .catch(ui.gameOverFailure)

// hide and clear the board rm=emove html from squares
// and set playerSpot back to x
// got anything else i have to do to get the board empty

}













module.exports = {
  onCreateGame,
  playerSpot,
  onBoardClick,
  checkWin,
  gameOver
}
