import React, { useState } from 'react'

function RaccoonCard({raccoon, deleteRaccoon, editRaccoon}) {

  const [nameInput, setNameInput] = useState(raccoon.name)

  function handleChangeName(event) {
    setNameInput(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    fetch(`http://localhost:3001/raccoons/${raccoon.id}`, {
      method: 'PATCH',
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: nameInput})
    })

    editRaccoon({...raccoon, name: nameInput})
  }

  function handleClick() {
    fetch(`http://localhost:3001/raccoons/${raccoon.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => deleteRaccoon(raccoon.id))
  }

  return (
    <>
      <h3>{raccoon.name}</h3>
      <img src={raccoon.image} alt={raccoon.name} />
      <button onClick={handleClick}>Send to the Dumpster</button>

      <form onSubmit={handleSubmit}>

        <input type="text"
          onChange={handleChangeName}
          value={nameInput}
          placeholder={raccoon.name}
        />

      </form>

    </>
  )

}

export default RaccoonCard
