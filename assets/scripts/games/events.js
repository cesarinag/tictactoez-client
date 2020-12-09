const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')


const onCreateGame = function (event) {
  event.preventDefault()
api.createGame()
  .then(function (response) {
    console.log(response)
    return response
  })
    .then(ui.createGameSuccess)
  .catch(ui.createGameFailure)
}

module.exports = {
  onCreateGame: onCreateGame,
}
