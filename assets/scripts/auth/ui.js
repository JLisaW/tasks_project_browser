'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log('sign up success')
}

const signUpFailure = (response) => {
}

const signInSuccess = (response) => {
  store.user = response.user
}

const signInFailure = (response) => {
}

const signOutSuccess = (response) => {
}

const signOutFailure = (response) => {

}

const changePasswordSuccess = (response) => {
}

const changePasswordFailure = (response) => {
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
