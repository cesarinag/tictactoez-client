'use strict'

const config = require('./../config')
const store = require('./../store')



const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data:{},
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const boardClick = function (cellIndex, playerSpot, over) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: playerSpot
        },
        over: false
      }
    }
  })
}


module.exports = {
  createGame,
  boardClick
}
