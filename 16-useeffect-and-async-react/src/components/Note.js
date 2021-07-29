function Note(props) {

  return (
    <div className="note">

      <p>{props.note.text}</p>

      <p>Complete by {props.note.date}</p>

      <button onClick={() => props.removeNote(props.note)}>Remove</button>

    </div>
  )

}

export default Note
