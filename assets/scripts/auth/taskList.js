'use strict'
const userMessage = require('./ui.js')

// list of tasks
const taskList = []

// one task
const taskItem = document.getElementById('taskList').value

function createTask () {
  const taskItem = document.getElementById('taskList').value
  const task = document.createTextNode(taskItem)
  const newTask = document.createElement('li')
  newTask.appendChild(task)
  document.getElementById('createTask').appendChild(newTask)
}

const deleteTask = function () {
  console.log('delete task function fired')
  const taskItem = document.getElementById('taskList').value
  taskList.splice(taskList.id)
  console.log(taskList.id)
  return
}

// update task function
const updateTask = function () {
  console.log('add task')
  const taskItem = document.getElementById('taskList').value
  taskList.push(updateTask)
}

// get task function
function getUserTask () {
  const taskList = []
  const taskItem = document.getElementById('task').value
  if (taskItem !== null) {
    userMessage('You have no incomplete tasks.')
  } else {
    taskList
  }
}


module.exports = {
  taskList,
  taskItem,
  createTask,
  deleteTask,
  updateTask,
  getUserTask
}
