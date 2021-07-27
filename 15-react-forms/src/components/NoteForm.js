function NoteForm(props) {

  return (
    <form id="note-form">

      <input
        type="text"
        placeholder="Add a note here!"
      />

      <br/>

      <label>when should we complete this?</label>
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
