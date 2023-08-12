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
                {/* <button className='button button-info'>Назад</button>
               стелка вместо надписи */}
                <button className='button button-light text-lg'>
                    🔙 Вернуться
                </button>

            </Link>
            {todo &&
                <div className='vertical-center'>
                    <div>
                        <h1>{todo?.title}</h1>
                        <p className='large-content'>{todo?.content}</p>
                    </div>
                </div>}
            {!todo &&
                <h1>Задача не найдена</h1>
            }
        </div>
    );
}
