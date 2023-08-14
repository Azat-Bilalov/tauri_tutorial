import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './RouterProvider';
import { Listener } from './ListenerProvider';

function App() {
    return (
        <BrowserRouter>
            <Listener>
                <Router />
            </Listener>
        </BrowserRouter>
    );
}

export default App;