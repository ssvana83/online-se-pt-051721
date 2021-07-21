import { useState } from 'react'

export default function Button({locked, setLocked}) {

  function handleClick(event) {
    setLocked(!locked)
  }

  return (
      <button onClick={handleClick}>Currently {locked ? 'Lock' : 'Unlock'}ed</button>
  )

}
