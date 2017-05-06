'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up success')
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then(() => {
      api.signInAuto(data)
       .then(ui.autoSignInSuccess)
       .catch(ui.autoSignInFailure)
    })
   .catch(ui.signUpFailure)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  console.log('sign in success')
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out success')
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  console.log('change password success')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const getUserTasks = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const user = data.user
  if (user.id.length !== 0) {
    api.show(user.id)
        .then(ui.onSuccess)
        .catch(ui.onError)
  } else {
    console.log('Please provide a user id.')
  }
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#getUserTasks').on('submit', getUserTasks)
}

module.exports = {
  addHandlers
}
