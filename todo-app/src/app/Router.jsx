import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import { TodoListPage, TodoPage } from '../pages';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" index exact element={<TodoListPage />}/>
            <Route path=":id" element={<TodoPage />} />
        </>
    )
)
        // <Routes>
        //     <Route path='/' exact element={<TodoListPage />} />
        //     <Route path='/:id' element={<TodoPage />} />
        // </Routes>

