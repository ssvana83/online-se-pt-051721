import { useState } from 'react'
import NoteForm from "./NoteForm"
import Note from './Note'

function NotesContainer(props) {

  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Do laundry",
      date: "tomorrow"
    },
    {
      id: 2,
      text: "Sleeeeeeep",
      date: "monday"
    },
    {
      id: 3,
      text: "Fooooooood",
      date: "7-30-2021"
    }
  ])

  function renderNotes() {
    return notes.map((note, i) => <Note key={i} note={note} removeNote={removeNote} />)
  }

  function addNote(newNote) {
    const newArray = [...notes, newNote]
    setNotes(newArray)
  }

  function removeNote(noteToRemove) {
    const filteredArray = notes.filter(note => note !== noteToRemove)
    setNotes(filteredArray)
  }

  return (
    <div id="notes-container">

      <NoteForm addNote={addNote} />

      {renderNotes()}

    </div>
  )

}

export default NotesContainer
