import React from 'react';
import {RouterProvider} from 'react-router-dom';
import { router } from './Router.jsx';
import { ListenerProvider } from './ListenerProvider';

function App() {
    return (
        <RouterProvider router={router}>
            <ListenerProvider/>
        </RouterProvider>
    );
}

export default App;