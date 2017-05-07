'use strict'
const userMessage = require('./ui.js')

// list of tasks
const taskList = []

// one task
const taskItem = document.getElementById('taskList').value

// add task
function createTask() {
  console.log('task created')
  const task = document.createElement('createTask').innerHTML
  const taskItem = document.getElementById('createTask').value
  if (taskItem === '') {
    userMessage("You must add a task.")
  }
  return taskList.push(updateTask)
}

const deleteTask = function() {
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
function getUserTask() {
  const taskList = []
  const taskItem = document.getElementById('task').value
  if (taskItem !== null) {
    userMessage("You have no incomplete tasks.")
  } else {
  taskList
  }
}

module.exports {
  taskList,
  taskItem,
  createTask,
  deleteTask,
  updateTask,
  getUserTask
}
