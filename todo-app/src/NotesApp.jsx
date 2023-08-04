import React, { useState } from 'react';
import './styles.css';

const NotesApp = () => {
    const [notes, setNotes] = useState([
        { id: 1, title: 'Задача 1', content: 'Содержание задачи 1' },
        { id: 2, title: 'Задача 2', content: 'Содержание задачи 2' },
    ]);

    const [newNote, setNewNote] = useState({ title: '', content: '' });

    const handleAddNote = () => {
        const newNoteWithId = { ...newNote, id: Date.now() };
        setNotes([...notes, newNoteWithId]);
        setNewNote({ title: '', content: '' });
    };

    const handleDeleteNote = (id) => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
    };

    return (
        <div>
            <h1>Планирование задач</h1>
            <div>
                <input
                    type="text"
                    placeholder="Название"
                    value={newNote.title}
                    onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                />
                <textarea
                    placeholder="Содержание"
                    value={newNote.content}
                    onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                />
                <button onClick={handleAddNote}>Add Note</button>
            </div>
            <div>
                {notes.map((note) => (
                    <div key={note.id}>
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                        <button onClick={() => handleDeleteNote(note.id)}>Удалить</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotesApp;
