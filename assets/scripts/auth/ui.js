'use strict'

const store = require('../store.js')
const showTasksHB = require('../taskHandlebars.handlebars')

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

const signOutSuccess = (data) => {
  console.log('sign out success')
  store.user = null
}

const signOutFailure = (data) => {
  console.log('sign out failure')
}

const changePasswordSuccess = (data) => {
  console.log('password change success')
}

const changePasswordFailure = (data) => {
  console.log('password change failure')
}

const createTaskSuccess = (data) => {
  console.log('create task success')
  console.log(data)
  store.userTasks = data.tasks
}

const createTaskError = (data) => {
  console.log('ui', data.tasks)
  console.log(store.user.token)
  console.log(store.user.tasks)
  console.log('create task error')
}

const updateTaskSuccess = (data) => {
  console.log('update task success')
  store.userTasks = data.tasks
  console.log('update task stored')
}

const updateTaskFailure = (data) => {
  console.log('update task failure')
}

const getUserTasksSuccess = (data) => {
  console.log('get task success')
  console.log('get tasks function fired')
  store.userTasks = data.tasks
  console.log(store.userTasks)
  const showTaskHtml = showTasksHB({ tasks: store.userTasks })
  console.log(data)
  $('#content').append(showTaskHtml)
  console.log('append working')
}

// const clearUserTask = () => {
//   $('#content').empty()
// }

const getUserTasksFailure = (data) => {
  console.log('get task failure')
}

const deleteTaskSuccess = (data) => {
  console.log('delete task success')
}

const deleteTaskFailure = (data) => {
  console.log('delete task failure')
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
  // clearUserTask
}
