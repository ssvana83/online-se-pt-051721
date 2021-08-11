import React from 'react'
import Cat from './Cat'
import { Link } from 'react-router-dom'

function Navbar({cats}) {

  return (
    <div id="navbar">

      <Link to="/litterbox">Litterbox</Link> | <Link to="/foodbowl">Foodbowl</Link>

      {cats.map(cat => <Link to={`/cats/${cat.id}`}>{cat.name}</Link>)}

    </div>
  )

}

export default Navbar
