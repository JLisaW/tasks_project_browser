'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault(event)
  const data = getFormFields(this)
  console.log('sign up success')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then(() => {
      api.signIn(data)
       .then(ui.signInSuccess)
       .catch(ui.signInFailure)
    })
   .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  console.log('sign in success')
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
  event.preventDefault()
  console.log('change password success')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onCreateTask = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('events', data)
  api.createTask(data)
      .then(ui.createTaskSuccess)
      .then(() => {
        api.getUserTasks()
        .then(ui.getUserTasksSuccess)
        .catch(ui.getUserTasksError)
      })
      .catch(ui.createTaskError)
}

const onGetUserTasks = function (event) {
  event.preventDefault()
  api.getUserTasks()
        .then(ui.getUserTasksSuccess)
        .catch(ui.getUserTasksError)
  console.log('Please provide a user id.')
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#createTask').on('submit', onCreateTask)
  $('#getUserTasks').on('click', onGetUserTasks)
}

module.exports = {
  addHandlers
}
