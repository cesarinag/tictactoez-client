'use strict'

const config = require('./../config')
const store = require('./../store')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

 // ajax will always make requests
// gonna return promise and handle it with .then and .catch

module.exports = {
  signUp
}
