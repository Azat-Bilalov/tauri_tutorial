const repo = require('./repo');

const todosController = {
    getTodos: () =>  repo.readData(),
    postTodo: (todo) => {
        const todos = repo.readData();
        todos.push(todo);
        repo.writeData(todos);
        return todo;
    },
    putTodo: (id, todo) => {
        const todos = repo.readData();
        const index = todos.findIndex(t => t.id == id);
        if (index >= 0) {
            todos[index] = todo;
            repo.writeData(todos);
            return todo;
        } else {
            return null;
        }
    },
    deleteTodo: (id) => {
        const todos = repo.readData();
        const index = todos.findIndex(t => t.id == id);
        if (index >= 0) {
            const todo = todos[index];
            todos.splice(index, 1);
            repo.writeData(todos);
            return todo;
        } else {
            return null;
        }
    }
}

module.exports = todosController;
