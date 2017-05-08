'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')
const taskItem = require('./taskList.js')

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
  $('#sign-up').modal('hide')
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  console.log('sign in success')
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  $('#sign-in').modal('hide')
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out success')
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  $('#sign-out').modal('hide')
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
  const data = getFormFields(event.target)
  console.log('events', data)
  api.createTask(data)
  // console.log(api.createTask)
      .then(ui.createTaskSuccess)
      .then(() => {
        api.getUserTask()
        .then(ui.getUserTaskSuccess)
        .catch(ui.getUserTaskError)
      })
      .catch(ui.createTaskError)
}

// const onViewTask = function (event) {
//   event.preventDefault()
//   api.viewTask()
//   .then(ui.viewTaskSuccess)
//   .catch(ui.viewTaskError)
// }

const onUpdateTask = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updateTask(data, taskItem.id)
    .then(ui.updateTaskSuccess)
    .then(() => {
      getUserTask(taskItem.id)
    })
    .catch(ui.updateTaskError)
}

const onGetUserTask = function (event) {
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
  // $('#viewTask').on('submit', onViewTask)
  $('#getUserTask').on('submit', onGetUserTask)
  $('#updateTask').on('submit', onUpdateTask)
  $('#deleteTask').on('submit', onDeleteTask)
}

module.exports = {
  addHandlers
}
