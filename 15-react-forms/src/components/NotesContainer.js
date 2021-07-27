import NoteForm from "./NoteForm"
import Note from './Note'

function NotesContainer(props) {

  return (
    <div id="notes-container">

      <NoteForm />

      <Note />
      <Note />
      <Note />
      <Note />
      <Note />

    </div>
  )

}

export default NotesContainer
