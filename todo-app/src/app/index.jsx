import React from 'react';
import { TodoListPage, TodoPage } from '../pages';
import { Router } from './RouterProvider';
import { listen } from '@tauri-apps/api/event'

function App() {
    // const navigate = useNavigate();

    // listen('new-todo', () => {
    //     navigate('/?new-todo=true');
    // });

    return (
        <Router />
    );
}

export default App;