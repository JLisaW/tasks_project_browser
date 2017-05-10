'use strict'

// list of tasks
const taskList = []

// one task
const taskItem = document.getElementById('taskList').value

// create task function
function createTask () {
  const taskItem = document.getElementById('taskList').value
  const task = document.createTextNode(taskItem)
  const newTask = document.createElement('li')
  newTask.appendChild(task)
  document.getElementById('createTask').appendChild(newTask)
  taskList.value = ''
}

const deleteTask = function () {
  ('delete task function fired')
  const taskItem = this.parentNode
  const remove = taskItem.parentNode
  remove.removeChild(taskItem)
}

// // update task function
// const updateTask = function () {
//   ('add task')
//   const taskItem = createTask(newTask.value)
//   // taskList.push(updateTask)
//   taskUl.appendChild(taskItem)
//   newTask.value = ''
// }

// get task function
// function getAllTasks () {
//   ('get all tasks function')
//   const taskList = []
//   const taskItem = document.getElementById('task').value
//   return taskList
// }

function getUserTask () {
  const taskList = []
  const taskItem = document.getElementById('task').value
  if (taskItem !== null) {
  } else {
    taskList
  }
}

module.exports = {
  taskList,
  taskItem,
  createTask,
  deleteTask
  // updateTask,
  // getUserTask
}
