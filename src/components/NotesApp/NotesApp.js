import React from 'react'
import './NotesApp.css'
import Sidebar from './Sidebar'
import Editor from './Editor'
// import { data } from './data'
import Split from "react-split"
import { nanoid } from "nanoid"

export default function NotesApp() {
    const [notes, setNotes] = React.useState(
        () => (JSON.parse(localStorage.getItem('notes')) || [])
    )

    const [currentNoteId, setCurrentNoteId] = React.useState((notes[0] && notes[0].id) || "")

    React.useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [...prevNotes, newNote])
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {
        // get the sub-array that have the notes to be updated and remaining notes
        const noteToUpdate = {...notes.filter((note) => note.id === currentNoteId)[0], body: text}
        const remainingNotes = notes.filter((note) => note.id !== currentNoteId)   
        
        setNotes(() => [noteToUpdate, ...remainingNotes])
    }
    
    function findCurrentNote() {
        // OR operator will stop if the first expression returns true
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    function deleteNote(event, id) {
        event.stopPropagation()
        setNotes((oldNotes) => {
            return oldNotes.filter((oldNote) => oldNote.id !== id)
        })
    }

    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 69]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote}
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}