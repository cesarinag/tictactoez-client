const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')


const onCreateGame = function (event) {
  event.preventDefault()
api.createGame()
  .then(function (response) {
    return response
  })
    .then(ui.createGameSuccess)
  .catch(ui.createGameFailure)
}

const playerSpot = 'X'

module.exports = {
  onCreateGame,
  playerSpot
}
