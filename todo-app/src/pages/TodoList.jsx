import React, { useEffect, useState } from 'react';
import { TodosApi } from '../api';
import { message } from '@tauri-apps/api/dialog';

const TodoListPage = () => {
    const todosApi = new TodosApi();

    const [todos, setTodos] = useState([]);

    const [newTodo, setNewTodo] = useState({ title: '', content: '' });

    const handleAddTodo = () => {
        if (!newTodo.title || !newTodo.content) {
            return message(
                'Поля не могут быть пустыми', 
                { title: 'Ошибка', type: 'error' }
            );
        };
        const newTodoWithId = { ...newTodo, id: Date.now() };
        setTodos([...todos, newTodoWithId]);
        setNewTodo({ title: '', content: '' });

        todosApi.postTodos(newTodoWithId);
    };

    const handleDeleteTodo = (id) => {
        confirm('This action cannot be reverted. Are you sure?')
            .then(res => {
                if (!res) return;
                const updatedTodos = todos.filter((todo) => todo.id !== id);
                setTodos(updatedTodos);
        
                todosApi.deleteTodos(id);
            });
    };

    useEffect(() => {
        todosApi.getTodos().then(data => {
            setTodos(data);
        });
    }, []);

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
};

export default TodoListPage;
