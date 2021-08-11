import React from 'react'
import { useParams } from 'react-router-dom'

function Cat({cats}) {

  let { id } = useParams()

  const foundCat = cats.find(cat => cat.id === parseInt(id))

  if (foundCat) {
    return (
      <>
        <p>Name: {foundCat.name}</p>
        <p>Favorite food: {foundCat.favFood}</p>
      </>
    )
  } else {
    return <p>"Could not find that cat!"</p>
  }

}

export default Cat
