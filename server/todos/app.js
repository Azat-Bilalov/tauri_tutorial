const express = require('express');
const router = express.Router();

const todosController = require('./controller');
const validateTodo = require('../middleware/validation');

router.get('/', (req, res) => {
    const todos = todosController.getTodos();
    res.send(todos);
});

router.post('/', validateTodo, (req, res) => {
    const todo = todosController.postTodo(req.validatedTodo);
    res.send(todo);
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const todo = todosController.putTodo(id, body);
    if (todo) {
        res.send(todo);
    } else {
        res.status(404).send();
    }
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const todo = todosController.deleteTodo(id);
    console.log(todo);
    if (todo) {
        res.send(todo);
    } else {
        res.status(404).send();
    }
});

module.exports = router;
