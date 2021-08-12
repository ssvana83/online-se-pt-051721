import React, { useEffect } from 'react'
import { useParams, useHistory, useRouteMatch } from 'react-router-dom'

function Cat({cats}) {

  let { id } = useParams()

  const history = useHistory()

  const foundCat = cats.find(cat => cat.id === parseInt(id))

  useEffect(() => {
    if (!foundCat) {
      history.push('/catalogue')
    }
  }, [foundCat])

  function handleClick() {
    history.push(`/cats/${foundCat.id + 1}`)
  }

  if (foundCat) {
    return (
      <>
        <p>Name: {foundCat.name}</p>
        <p>Favorite food: {foundCat.favFood}</p>

        <button onClick={handleClick}>Next cat</button>
      </>
    )
  } else {
    return <p>"Could not find that cat!"</p>
  }

}

export default Cat
