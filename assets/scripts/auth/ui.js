'use strict'

const store = require('../store.js')
const api = require('./api')
const showTasksHB = require('../taskHandlebars.handlebars')
const getFormFields = require(`../../../lib/get-form-fields`)

const signUpSuccess = (data) => {
  $('#signUpModal').modal('toggle')
}

const signUpFailure = (response) => {
  userMessage('Please choose a different username.')
}

const signInSuccess = (data) => {
  console.log('sign in success')
  store.user = data.user
  console.log(data.user)
  $('#signInModal').modal('toggle')
}

const signInFailure = (response) => {
  userMessage('Sign in unsuccessful, please try again.')
}

const signOutSuccess = (data) => {
  console.log('sign out success')
  store.user = null
}

const signOutFailure = (response) => {
  userMessage('You are still signed in, please try again.')
}

const changePasswordSuccess = (data) => {
  console.log('password change success')
  $('#change-password').changePWmodal('hide')
}

const changePasswordFailure = (response) => {
  userMessage('Unsuccessful password change, please try again.')
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
}

const createTaskError = (data) => {
  userMessage('Something went wrong, please try again.')
}

const updateTaskSuccess = (taskId) => {
  console.log('update task success')
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
  console.log('delete task success')
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
  console.log('delete task working')
  console.log(event.target)
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
