const todos = require('../models/todos')

exports.getTodo = async (req, res, next) => {
    try {
        const Todo = await todos.findById(req.params.id)
        res.status(200).json({ secsess: true, msg: `show single todo`, data: Todo })

    } catch (error) {
        res.status(400).json({ secsess: false, msg: `please insert a correct id`, data: error.message })
    }
}

exports.getTodos = async (req, res, next) => {
    try {
        const Todos = await todos.find()

        res.status(200).json({ secsess: true, msg: "show all todos", data: Todos })

    } catch (error) {

        res.status(400).json({ secsess: false, msg: "someting went wrong", data: error.message })

    }
}
exports.createTodo = async (req, res, next) => {
    try {
        const todo = await todos.create(req.body)
        res.status(201).json({ secsess: true, msg: `create new todo`, data: req.body })

    } catch (error) {

        res.status(400).json({ secsess: false, msg: `someting went wrong`, data: error.message })
    }

}

exports.updateTodo = async (req, res, next) => {
    try {
        const updatetodo = await todos.findByIdAndUpdate(req.params.id, req.body)
        //const findonetodo = await todos.findById(req.param.id)
        res.status(200).json({ secsess: true, msg: `update todo ${req.params.id}`, data: updatetodo })

    } catch (error) {

        res.status(200).json({ secsess: false, msg: 'someting went wrong', data: error.message })

    }

}

exports.deleteTodo = async (req, res, next) => {
    try {
        const delettodo = await todos.findByIdAndDelete(req.params.id)

        if (!delettodo) {
            res.status(400).json({ secsess: false, msg: 'todos is empty' })
        }

        res.status(200).json({ secsess: true, msg: `delete todo ${req.params.id}`, data: [] })

    } catch (error) {
        res.status(400).json({ secsess: false, msg: `please insert a correct id`, data: error.message })
    }
}