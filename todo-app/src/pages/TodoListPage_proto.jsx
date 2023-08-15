import React, { useState } from 'react';

export function TodoListPage() {
    // список всех задач
    const [todos, setTodos] = useState([]);

    // новая задача
    const [newTodo, setNewTodo] = useState({ title: '', content: '' });

    // добавление новой задачи
    const handleAddTodo = () => {
        if (!newTodo.title || !newTodo.content) {
            console.error("Поля не должны быть пустыми");
            return;
        };
        const newTodoWithId = { ...newTodo, id: Date.now() };
        setTodos([...todos, newTodoWithId]);
        setNewTodo({ title: '', content: '' });
    };

    // удаление задачи
    const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>Планирование задач</h1>
            <div className="container">
                <input
                    className="input-title"
                    type="text"
                    placeholder="Название"
                    value={newTodo.title}
                    onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
                />
                <textarea
                    className="input-content"
                    placeholder="Содержание"
                    value={newTodo.content}
                    onChange={(e) => setNewTodo({ ...newTodo, content: e.target.value })}
                />
                <button className="button-add button-lg" onClick={handleAddTodo}>Добавить</button>
            </div>
            <hr />
            <div className="container">
                {todos.map((todo) => (
                    <div className="todo" key={todo.id}>
                        <h3 className='todo-title'>
                            {todo.title}
                        </h3>
                        <p className="todo-content">
                            {todo.content}
                        </p>
                        <button className='button-delete' onClick={() => handleDeleteTodo(todo.id)}>Удалить</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
