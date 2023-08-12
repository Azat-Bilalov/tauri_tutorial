import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TodosApi } from '../api';

export function SingleTodoPage() {
    const todosApi = new TodosApi();

    const { id } = useParams();
    const [todo, setTodo] = useState();

    useEffect(() => {
        todosApi.getTodos().then(todos => {
            const todo = todos.find(todo => todo.id == id);
            setTodo(todo);
        })
    }, [id]);

    return (
        <div className='container'>
            <Link to="/">
                <button>Назад</button>
            </Link>
            {todo && <>
                <h1>{todo?.title}</h1>
                <p>{todo?.content}</p>
            </>}
            {!todo &&
                <h1>Задача не найдена</h1>
            }
        </div>
    );
}
