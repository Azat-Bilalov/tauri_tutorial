import { getClient, ResponseType } from '@tauri-apps/api/http';


export const getTodos = async () => {
    const client = await getClient();
    const response = await client.get('http://localhost:3000/todos', {
        headers: {
            'Content-Type': 'application/json'
        },
        responseType: ResponseType.JSON
    });

    return response.data;
}