import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Sidebar(props) {
    const [showTrashCan, setShowTrashCan] = React.useState(null)

    function handleOver(id) {
        setShowTrashCan(id)
    }

    const noteElements = props.notes.map((note, index) => (
        <div 
            key={note.id} 
            onMouseEnter={() => handleOver(note.id)} 
            onMouseLeave={() => setShowTrashCan(null)}
        >
            <div
                key={index}
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{ JSON.stringify(note.body).split("\\n\\n")[0].slice(2) }</h4>
                {
                    showTrashCan === note.id &&
                    <FontAwesomeIcon 
                        className="trash-can-icon" 
                        icon={solid('trash-can')} 
                        size="lg" 
                        onClick={(event) => props.deleteNote(event, note.id)}
                    />
                }
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}