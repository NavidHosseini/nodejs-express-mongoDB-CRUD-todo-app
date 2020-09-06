const express = require('express')
const router = express.Router()
const { createTodo,
    deleteTodo,
    getTodo,
    getTodos,
    updateTodo } = require('../controllers/todosControllers')

router.route('/').get(getTodos).post(createTodo)

router.route('/:id').get(getTodo).put(updateTodo).delete(deleteTodo)


module.exports = router