import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { TodoListPage, SingleTodoPage } from './pages';
import { listen } from '@tauri-apps/api/event'

function App() {
    const navigate = useNavigate();

    listen('new-todo', () => {
        navigate('/?new-todo=true');
    });

    return (
        <div className="App">
            <Routes>
                <Route path="/" exact element={<TodoListPage />} />
                <Route path="/:id" element={<SingleTodoPage />} />
            </Routes>
        </div>
    );
}

export default App;