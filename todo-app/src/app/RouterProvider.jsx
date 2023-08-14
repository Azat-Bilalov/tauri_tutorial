import { Route, Routes } from 'react-router-dom';
import { TodoListPage, TodoPage } from '../pages';

export function Router() {
    return (
        <Routes>
            <Route path='/' exact element={<TodoListPage />} />
            <Route path='/:id' element={<TodoPage />} />
        </Routes>
    );
}
