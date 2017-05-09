'use strict'

const store = require('../store.js')
const api = require('./api')
const showTasksHB = require('../taskHandlebars.handlebars')
const getFormFields = require(`../../../lib/get-form-fields`)

const signUpSuccess = (data) => {
  console.log('sign up success')
}

const signUpFailure = (error) => {
  console.log(error)
}

const signInSuccess = (data) => {
  console.log('sign in success')
  store.user = data.user
  console.log(data.user)
}

const signInFailure = (error) => {
  console.log(error)
}

const autoSignInSuccess = (data) => {
  console.log('auto sign in success')
  store.user = data.user
  $('#authentication').signInmodal('hide')
}

const autoSignInFailure = (error) => {
  console.log(error)
}

const signOutSuccess = (data) => {
  console.log('sign out success')
  store.user = null
}

const signOutFailure = (data) => {
  console.log('sign out failure')
}

const changePasswordSuccess = (data) => {
  console.log('password change success')
  $('#change-password').changePWmodal('hide')
}

const changePasswordFailure = (data) => {
  console.log('password change failure')
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
  console.log('create task success')
  store.userTasks = data.tasks
}

const createTaskError = (data) => {
  console.log('create task error')
}

const updateTaskSuccess = (taskId) => {
  console.log('update task success')
  store.userTasks = taskId.tasks
  // api.updateTask(taskId)
  //   .then(updateTaskSuccess)
  //   .catch(updateTaskFailure)
  refreshTable()
}

const updateTaskFailure = (data) => {
  console.log('update task failure')
}

const getUserTasksSuccess = (data) => {
  store.userTasks = data.tasks
  refreshTable()
}

const getUserTasksFailure = () => {
  console.log('get task failure')
}

const deleteTaskSuccess = () => {
  console.log('delete task success')
  refreshTable()
  api.getUserTasks()
    .then(getUserTasksSuccess)
    .catch(getUserTasksFailure)
}

const deleteTaskFailure = (data) => {
  console.log('delete task failure')
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
  // console.log('update task function')
  event.preventDefault()
  const data = getFormFields(event.target)
  // data.task.id = taskId
  debugger
  api.updateTask(data)
    .then(updateTaskSuccess)
    .catch(updateTaskFailure)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  autoSignInSuccess,
  autoSignInFailure,
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
