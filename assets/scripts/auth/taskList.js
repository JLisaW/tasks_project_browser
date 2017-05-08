'use strict'
const userMessage = require('./ui.js')
const onCreateTask = require('./events.js')

// list of tasks
const taskList = []

// one task
const taskItem = document.getElementById('taskList').value

$(document).ready(function () {
  $('button').click(function () {
    const onCreateTask = $('#createTask').append('<ul>' + $('input[name=task]').val())
  })
  taskList.push(onCreateTask)
  // $('body').on('click', '#createTask', function () {
  //   $(this).closest('ul').remove()
  // })
})

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
