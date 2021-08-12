import React from 'react'
import { Link } from 'react-router-dom'

function Catalogue({cats}) {

  return (
    <>
      {cats.map(cat => <>
        <br/>
        <br/>
        <Link to={`/cats/${cat.id}`}>{cat.name}</Link>
      </>)}
    </>
  )

}

export default Catalogue
