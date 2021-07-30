import React,  { useEffect } from 'react'

function Note(props) {

  //useEffect(function() {
    // primary effect
    // alert("Subscribe to a chat room")

    // cleanup function
    // return () => alert("Unsubscribe from chat room")

  //}, /* dependency array */ [])

  return (
    <div className="note">

      <p className="note-id">#{props.orderNumber + 1}</p>

      <p>{props.note.text}</p>

      <p>Complete by {props.note.date}</p>

      <button onClick={() => props.removeNote(props.note)}>Remove</button>

    </div>
  )

}

export default Note
