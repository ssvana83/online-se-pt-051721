import { useState } from 'react'
import NoteForm from "./NoteForm"
import Note from './Note'

function NotesContainer(props) {

  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Do laundry, fold clothes",
      date: "maybe tomorrow?"
    },
    {
      id: 2,
      text: "Sleeeeeeep",
      date: "never lol"
    },
    {
      id: 3,
      text: "Cook family dinner",
      date: "2021-7-30"
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
