import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TodoListPage, SingleTodoPage } from './pages';

function App() {
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