function NoteForm(props) {

  return (
    <form id="note-form">

      <label>Add A New Note!</label>
      <input
        type="text"
      />

      <label>When should we complete this chore?</label>
      <input
        type="date"
      />

      <input
        type="submit"
        value="Add Note"
      />

    </form>
  )

}

export default NoteForm
