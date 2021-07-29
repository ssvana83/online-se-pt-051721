import React, { useState } from 'react'

function NoteForm({addNote}) {

  const [textInput, setTextInput] = useState('')
  const [dateInput, setDateInput] = useState('')

  function handleChangeText(event) {
    setTextInput(event.target.value.replace(/the/, ''))
  }

  function handleChangeDate(event) {
    setDateInput(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    addNote({text: textInput, date: dateInput})
    setTextInput('')
    setDateInput('')
  }

  return (
    <form id="note-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Add a note here!"
        onChange={handleChangeText}
        value={textInput}
      />

      <br/>

      <label>when should we complete this?</label>
      <input
        type="date"
        onChange={handleChangeDate}
        value={dateInput}
      />

      <input
        type="submit"
        value="Add Note"
      />

    </form>
  )

}

export default NoteForm
