'use strict'

const store = require('../store.js')
const api = require('./api')
const showTasksHB = require('../taskHandlebars.handlebars')
const getFormFields = require(`../../../lib/get-form-fields`)

const signUpSuccess = (data) => {
  $('#signUpModal').modal('toggle')
  userMessage('You are now signed up, please sign in.')
}

const signUpFailure = (response) => {
  $('#signUpModal').modal('toggle')
  userMessage('Sign up unsuccessful, please try again.')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#signInModal').modal('toggle')
  userMessage('You are now signed in.')
}

const signInFailure = (response) => {
  $('#signInModal').modal('toggle')
  userMessage('Sign in unsuccessful, please try again.')
}

const signOutSuccess = (data) => {
  store.user = null
  $('#signOutModal').modal('toggle')
}

const signOutFailure = (response) => {
  $('#signOutModal').modal('toggle')
  userMessage('You are still signed in, please try again.')
}

const changePasswordSuccess = (data) => {
  $('#changePWModal').modal('toggle')
  userMessage('Your password has been changed.')
}

const changePasswordFailure = (response) => {
  $('#changePWModal').modal('toggle')
  userMessage('Unsuccessful password change.  Did you sign in?')
}
// END OF AUTH SECTION
// END OF AUTH SECTION
// END OF AUTH SECTION

// APP FUNCTIONS BEGIN
// APP FUNCTIONS BEGIN
// APP FUNCTIONS BEGIN

const refreshTable = () => {
  const showTaskHtml = showTasksHB({ tasks: store.userTasks })
  $('#content').empty()
  $('#content').append(showTaskHtml)
  $('#update-task-by-id-form').on('submit', onUpdateTask)
  $('.delete-task-button').on('click', onDeleteTask)
}

const createTaskSuccess = (data) => {
  store.userTasks = data.tasks
  $('input').val('')
}

const createTaskError = (data) => {
  userMessage('Something went wrong, please try again.')
}

const updateTaskSuccess = (taskId) => {
  store.userTasks = taskId.tasks
  refreshTable()
}

const updateTaskFailure = (data) => {
  userMessage('Something went wrong, please try again.')
  store.userTasks = data.tasks
}

const getUserTasksSuccess = (data) => {
  store.userTasks = data.tasks
  refreshTable()
}

const getUserTasksFailure = () => {
  userMessage('Something went wrong, please try again.')
}

const deleteTaskSuccess = () => {
  refreshTable()
  api.getUserTasks()
    .then(getUserTasksSuccess)
    .catch(getUserTasksFailure)
}

const deleteTaskFailure = (data) => {
  userMessage('Something went wrong, please try again.')
}

const onDeleteTask = function (event) {
  event.preventDefault()
  const taskId = $(event.target).attr('taskid')
  refreshTable()
  api.deleteTask(taskId)
    .then(deleteTaskSuccess)
    .catch(deleteTaskFailure)
}

const onUpdateTask = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateTask(data)
    .then(updateTaskSuccess)
    .catch(updateTaskFailure)
}

const userMessage = (txt) => {
  const message = $('#message')[0]
  $(message).text(txt)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  getUserTasksFailure,
  getUserTasksSuccess,
  updateTaskFailure,
  updateTaskSuccess,
  createTaskError,
  createTaskSuccess,
  deleteTaskSuccess,
  deleteTaskFailure
}
