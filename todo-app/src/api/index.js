import { fetch, Body } from '@tauri-apps/api/http';

const URL = 'http://localhost:3000/todos';

async function getTodos() {
    const response = await fetch(URL, {
        method: 'GET',
        timeout: 30
    });

    if (response.ok) {
        return response.data;
    } else {
        throw new Error(response.status);
    }
}

async function postTodos(todo) {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: Body.json(todo)
    });

    if (response.ok) {
        return response.data;
    } else {
        throw new Error(response.status);
    }
}

async function putTodos(todo) {
    const response = await fetch(`${URL}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: Body.json(todo)
    });

    if (response.ok) {
        return response;
    } else {
        throw new Error(response.status);
    }
}

async function deleteTodos(id) {
    const response = await fetch(`${URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        return response;
    } else {
        throw new Error(response.status);
    }
}

export {
    getTodos, deleteTodos, putTodos, postTodos
}