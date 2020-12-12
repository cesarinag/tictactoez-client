'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store')



// const player global variable
let playerSpot = 'X'

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

// checkWinner() should be here

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
// runs checkwinner
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




// checkwinner function logic
const checkWinner = function (gameArray) {
  const somebodyHome = (playerSpot) => playerSpot !== ''
  //  by default is false in api
  let victory = store.game.over
  // horizontal 1
if (gameArray[0] !== '' && gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2]){
  console.log('im 23 with a money tree')
  $('#message').text('growing more too, i just planted 100 seeds')
  // lmk wassup is it real jk this is for the game.over reset
  victory = true
  // horizontal 2
} else if (gameArray[3] !== '' && gameArray[3] === gameArray[4] && gameArray[3] === gameArray[5]){
  console.log('im not saying im the nicest')
  $('#message').text('i just live life like it')
  victory = true
  // horizontal 3
} else if (gameArray[6] !== '' && gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8]){
  console.log('how a bottle wine')
  $('#message').text('become a fountain of youth')
  victory = true
  // vertical 1
} else if (gameArray[0] !== '' && gameArray[0] === gameArray[3] && gameArray[0] === gameArray[6]){
  console.log('its foggy where i live')
$('#message').text('and they wonder why im choosy')
victory = true
// vertical 2
} else if (gameArray[1] !== '' && gameArray[1] === gameArray[4] && gameArray[1] === gameArray[7]){
  console.log('made a crazy ass play today')
  $('#message').text('im killin it')
victory = true
// vertical 3
} else if (gameArray[2] !== '' && gameArray[2] === gameArray[5] && gameArray[2] === gameArray[8]){
  console.log('dont check me')
  $('#message').text('check the air quality')
  victory = true
  // diagonal 1
} else if (gameArray[0] !== '' && gameArray[0] === gameArray[4] && gameArray[0] === gameArray[8]){
  console.log('91919191919191')
  $('#message').text('numberssss')
  victory = true
  // diagonal 2
} else if (gameArray[2] !== '' && gameArray[2] === gameArray[4] && gameArray[2] === gameArray[6]){
  console.log('rap dont work push bass like the 80s')
$('#message').text('when dis come on the real ps go crazy')
victory = true
} else if (gameArray.every(somebodyHome) === true) {
  victory = true
  $('#message').html('you tied bruv')
  console.log('TIE')
}
return victory
}



module.exports = {
  onCreateGame,
  playerSpot,
  onBoardClick,
  checkWinner
}
