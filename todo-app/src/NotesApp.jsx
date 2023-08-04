import React, { useEffect, useState } from 'react';
import { TodosApi } from './api';
import { getClient, ResponseType } from '@tauri-apps/api/http';
import { message } from '@tauri-apps/api/dialog';

import './styles.css';

const NotesApp = () => {
    const todosApi = new TodosApi();

    const [notes, setNotes] = useState([]);

    const [newNote, setNewNote] = useState({ title: '', content: '' });

    const handleAddNote = () => {
        if (!newNote.title || !newNote.content) {
            return message(
                'Поля не могут быть пустыми', 
                { title: 'Ошибка', type: 'error' }
            );
        };
        const newNoteWithId = { ...newNote, id: Date.now() };
        setNotes([...notes, newNoteWithId]);
        setNewNote({ title: '', content: '' });

        todosApi.postTodos(newNoteWithId);
    };

    const handleDeleteNote = (id) => {
        confirm('This action cannot be reverted. Are you sure?')
            .then(res => {
                if (!res) return;
                const updatedNotes = notes.filter((note) => note.id !== id);
                setNotes(updatedNotes);
        
                todosApi.deleteTodos(id);
            });
    };

    useEffect(() => {
        todosApi.getTodos().then(data => {
            setNotes(data);
        });
    }, []);

    return (
        <div>
            <h1>Планирование задач</h1>
            <div className="container">
                <input
                    className="input-title"
                    type="text"
                    placeholder="Название"
                    value={newNote.title}
                    onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                />
                <textarea
                    className="input-content"
                    placeholder="Содержание"
                    value={newNote.content}
                    onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                />
                <button className="button-add button-lg" onClick={handleAddNote}>Add Note</button>
            </div>
            <hr />
            <div className="container">
                {notes.map((note) => (
                    <div className="note" key={note.id}>
                        <h3 className='note-title'>
                            {note.title}
                        </h3>
                        <p className="note-content">
                            {note.content}
                        </p>
                        <button className='button-delete' onClick={() => handleDeleteNote(note.id)}>Удалить</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotesApp;
