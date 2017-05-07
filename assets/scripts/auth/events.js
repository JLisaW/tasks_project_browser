'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('sign up success')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then(() => {
      api.autoSignIn(data)
       .then(ui.autoSignInSuccess)
       .catch(ui.autoSignInFailure)
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
  $('#signIn').modal('hide')
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password success')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $('#signIn').modal('hide')
}

const onCreateTask = function (event) {
  event.preventDefault()
  api.createTask()
      .then(ui.createTaskSuccess)
      .catch(ui.createTaskError)
}

const onUpdateTask = function (event) {
  event.preventDefault()
  api.updateTask()
    .then(ui.updateTaskSuccess)
    .catch(ui.updateTaskError)
}

const onGetUserTasks = function (event) {
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

const onDeleteTask = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteTask(data)
    .then(ui.deleteTaskSuccess)
    .catch(ui.deleteTaskFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#createTask').on('submit', onCreateTask)
  $('#getUserTasks').on('submit', onGetUserTasks)
  $('#updateTask').on('submit', onUpdateTask)
  $('#deleteTask').on('submit', onDeleteTask)
}

module.exports = {
  addHandlers
}
