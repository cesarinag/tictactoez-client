'use strict'

const config = require('./../config')
const store = require('./../store')

// signup function
const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

// signin function
const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

// const signout function
const signOut = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer '+ store.user.token
    }
  })
}
 // ajax will always make requests
// gonna return promise and handle it with .then and .catch

module.exports = {
  signUp,
  signIn,
  signOut
}
