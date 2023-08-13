import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import { TodoListPage, TodoPage } from '../pages';

export function Router() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" exact element={<TodoListPage />} />
                    <Route path="/:id" element={<TodoPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
