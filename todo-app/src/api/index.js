import { fetch, Body } from '@tauri-apps/api/http';

export class TodosApi {
    constructor() {
        this.url = 'http://localhost:3000/todos';
    }

    async getTodos() {
        const response = await fetch(this.url, {
            method: 'GET',
            timeout: 30
        });

        if (response.ok) {
            return response.data;
        } else {
            throw new Error(response.status);
        }
    }

    async postTodos(todo) {
        const response = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: Body.json(todo)
        });

        console.log(todo);

        if (response.ok) {
            return response.data;
        } else {
            throw new Error(response.status);
        }
    }

    async putTodos(todo) {
        const response = await fetch(`${this.url}/${todo.id}`, {
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

    async deleteTodos(id) {
        const response = await fetch(`${this.url}/${id}`, {
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
}