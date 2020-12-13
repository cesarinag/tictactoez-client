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
// const areWeThereYet = store.game.over
let board = '.box'


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
// $('#message').text(playerSpot + '\'s turn')
let gameWon = checkWin(board, playerSpot)
	if (gameWon) gameOver(gameWon);
}
}




// game array behind logic
const checkWin = function (winCombinations) {
  const somebodyHome = (playerSpot) => playerSpot !== ''
  const gameArray = store.game.cells
  playerSpot = playerSpot === 'X' ? 'O' : 'X'
  // Row 1 Win: if square [0] is equal to square [1] and square [2]
  if (gameArray[0] !== '' && gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2]) {
    console.log('Row 1 Win!')
    $('#message').text('You Win!')
    store.game.over = true
    // Row 2 Win: if square [3] is equal to square [4] and square [5]
  } else if (gameArray[3] !== '' && gameArray[3] === gameArray[4] && gameArray[5]) {
    console.log('Row 2 Win!')
    $('#message').text('You Win!')
    store.game.over = true
    // Row 3 Win: if square [6] is equal to square [7] and square [8]
  } else if (gameArray[6] !== '' && gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8]) {
    console.log('Row 3 Win!')
    $('#message').text('You Win!')
    store.game.over = true
    // Column 1 Win: if square [0] is equal to square [3] and square [6]
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[3] && gameArray[0] === gameArray[6]) {
    console.log('Column 1 Win!')
    $('#message').text('You Win!')
    store.game.over = true
    // Column 2 Win: if square [1] is equal to square [4] and square [7]
  } else if (gameArray[1] !== '' && gameArray[1] === gameArray[4] && gameArray[1] === gameArray[7]) {
    console.log('Column 2 Win!')
    $('#message').text('You Win!')
    store.game.over = true
    // Column 3 Win: if square [2] is equal to square [5] and square [8]
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[5] && gameArray[2] === gameArray[8]) {
    console.log('Column 3 Win!')
    $('#message').text('You Win!')
    store.game.over = true
    // Diagonal Top-Left to Bottom-Right Win (or visa versa): if square [0] is equal to square [4] and square [8]
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[4] && gameArray[0] === gameArray[8]) {
    console.log('Diagonal Win!')
    $('#message').text('You Win!')
    store.game.over = true
    // Diagonal Top-Right to Bottom-Left Win (or visa-versa): if square [2] is equal to square [4] and square [6]
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[4] && gameArray[2] === gameArray[6]) {
    console.log('Diagonal Win!')
    $('#message').text('You Win!')
    store.game.over = true
  // if none of these conditions are met
} else if (gameArray.every(somebodyHome) === true) {
    store.game.over = true
    $('#message').text('It is a tie!')
    console.log('TIE!')
    for (x = 0; x < gameArray.length; x++) {
      for (o = 0; o < gameArray.length; o++) {
        if (gameArray[x][o] === '') {
          return false
        }
      }
      return true
    }
  }
}







// clear the boardddd
// $('.box').text('')

// display turn (rephrase logic bc no player2)
      // if (store.Player === store.player1) {
      //     $('#gameMessage').text("It is now: player1's turn")
      // } else if (store.currentPlayer === store.player2) {
      //     $('#gameMessage').text("It is now: player2's turn")
      // }









module.exports = {
  onCreateGame,
  playerSpot,
  onBoardClick,
  // checkWinner,
  // checkWin
}
