import React, { useEffect, useState } from 'react'
import RaccoonCard from './RaccoonCard'

function RaccoonList() {

  const [raccoons, setRaccoons] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/raccoons')
    .then(res => res.json())
    .then(data => setRaccoons(data))
  }, [])

  function deleteRaccoon(raccoonId) {
    const newRaccoons = raccoons.filter(raccoon => raccoon.id !== raccoonId)
    setRaccoons(newRaccoons)
  }

  function editRaccoon(editedRaccoon) {

    const newRaccoons = raccoons.map(raccoon => {
      if (raccoon.id !== editedRaccoon.id) {
        return raccoon
      } else {
        return editedRaccoon
      }
    })

    setRaccoons(newRaccoons)

  }

  return (
    <div id="raccoon-list">

      {raccoons.map(raccoon => <RaccoonCard raccoon={raccoon} deleteRaccoon={deleteRaccoon} editRaccoon={editRaccoon} />)}

    </div>
  )

}

export default RaccoonList
