import React, { useState, useEffect } from 'react'
import NoteForm from "./NoteForm"
import Note from './Note'

function NotesContainer(props) {

  const [notes, setNotes] = useState([])

  useEffect(function() {
    fetch('http://localhost:3001/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  }, [])

  function renderNotes() {
    return notes.map((note, i) => <Note key={note.id} note={note} orderNumber={i} removeNote={removeNote} />)
  }

  function addNote(newNote) {
    fetch(`http://localhost:3001/notes`, {
      method: 'POST',
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNote)
    })
    .then(res => res.json())
    .then(noteWithID => {
      const newArray = [...notes, noteWithID]
      setNotes(newArray)
    })

  }

  function removeNote(noteToRemove) {
    const filteredArray = notes.filter(note => note !== noteToRemove)
    setNotes(filteredArray)

    fetch(`http://localhost:3001/notes/${noteToRemove.id}`, {
      method: 'DELETE'
    })
  }

  return (
    <div id="notes-container">

      <NoteForm addNote={addNote} />

      {renderNotes()}

    </div>
  )

}

export default NotesContainer
