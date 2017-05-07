'use strict'

const task = []

const taskItem = document.getElementById('task').value

const createTask = document.createElement('task')

const deleteTask = function () {
  const taskItem = document.getElementById('task').value
  task.splice(task)
  return
}

const updateTask

const addTask = function () {
  const taskItem = document.getElementById('task').value
  if (taskItem === '') {
    alert ("You must add a task.")
  else {
    task.push(task)
  }
  }
  return
}
