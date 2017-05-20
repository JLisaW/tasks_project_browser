'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault(event)
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
   .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onCreateTask = function (event) {
  console.log('create task fired')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createTask(data)
      .then(ui.createTaskSuccess)
      .catch(ui.createTaskError)
}

const onGetUserTasks = function (event) {
  console.log('get user task fired')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getUserTasks(data)
        .then(ui.getUserTasksSuccess)
        .catch(ui.getUserTasksFailure)
}

const onDeleteTask = function (event) {
  console.log('on delete task')
  event.preventDefault()
  const taskId = $(event.target).attr('taskId')
  ui.refreshTable()
  api.deleteTask(taskId)
    .then(ui.deleteTaskSuccess)
    .catch(ui.deleteTaskFailure)
}

const onUpdateTask = function (event) {
  console.log('update task fired')
  event.preventDefault()
  const taskId = $(this).attr('taskId')
  const data = getFormFields(event.target)
  console.log(event.target)
  ui.refreshTable()
  api.updateTask(taskId, data)
    .then(ui.updateTaskSuccess)
    .catch(ui.updateTaskFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#createTask').on('submit', onCreateTask)
  $('#getUserTasks').on('click', onGetUserTasks)
  $('#content').on('click', '.delete-task-button', onDeleteTask)
  $('#content').on('submit', '.update-task-by-id-form', onUpdateTask)
  $('#hideSignOut').hide()
  $('#createTask').addClass('hide-element')
}

module.exports = {
  addHandlers
}
