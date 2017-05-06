'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log('sign up success')
  userMessage('You have successfullly signed up, please sign in.')
}

const signUpFailure = (error) => {
  console.log(error)
  userMessage('Please choose a different username.')
}

const signInSuccess = (data) => {
  console.log('sign in success')
  store.user = data.user
  console.log(data.user)
  userMessage('You have successfully signed in.')
}

const signInFailure = (error) => {
  console.log(error)
  userMessage('Sign in unsuccessful, please try again.')
}

const autoSignInSuccess = (data) => {
  console.log('auto sign in success')
  store.user = data.user
  userMessage('You are successfully signed in.')
}

const autoSignInFailure = (error) => {
  console.log(error)
  userMessage('Sign in unsuccessful, please try again.')
}
const signOutSuccess = (data) => {
  console.log('sign out success')
  store.user = null
  userMessage('You have successfully signed out.')
}

const signOutFailure = (data) => {
  console.log('sign out failure')
  userMessage('You are still signed in, please try again.')
}

const changePasswordSuccess = (data) => {
  console.log('password change success')
  userMessage('Password Change Successful.')
}

const changePasswordFailure = (data) => {
  console.log('password change failure')
  userMessage('Unsuccessful password change, please try again.')
}

const createTaskSuccess = (data) => {
  console.log('create task success')
  store.task = data.task
  userMessage('New Task Created!')
}

const createTaskError = (data) => {
  console.log('create task error')
  userMessage('Something went wrong, please try again.')
}

const updateTaskSuccess = (data) => {
  console.log('update task success')
  store.task = data.task
  console.log('update task stored')
  userMessage('You have successfullly updated a task.')
}

const updateTaskFailure = (data) => {
  console.log('update task failure')
  userMessage('Something went wrong, please try again.')
}

const getTasksSuccess = (data) => {
  console.log('get task success')
  store.tasks = data.tasks
  userMessage('Here are your tasks.')
}

const getTasksFailure = (data) => {
  console.log('get task failure')
  userMessage('Something went wrong, please try again.')
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
  autoSignInSuccess,
  autoSignInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  getTasksFailure,
  getTasksSuccess,
  updateTaskFailure,
  updateTaskSuccess,
  createTaskError,
  createTaskSuccess
}
