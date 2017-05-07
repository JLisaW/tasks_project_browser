'use strict'
const userMessage = require('./ui.js')

// list of tasks
const taskList = []

// one task
const taskItem = document.getElementById('task').value

const createTask = document.createElement('task')

const deleteTask = function () {
  console.log('delete task function fired')
  const taskItem = document.getElementById('task').value
  taskList.splice(taskList.id)
  console.log(taskList.id)
  return
}

// add task function
const newTask = function () {
  console.log('add task')
  const taskItem = document.getElementById('task').value
  if (taskItem === '') {
    userMessage ("You must add a task.")
  else {
    taskList.push(taskList)
  }
}
  return
}

// get task function
function getUserTask () {
  const taskList = []
  const taskItem = document.getElementById('task').value
  if (taskItem !== null) {
    userMessage ("You have no incomplete tasks.")
  } else {
    taskList
  }
}

// const updateTask
