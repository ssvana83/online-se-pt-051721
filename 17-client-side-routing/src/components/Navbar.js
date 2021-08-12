import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

  return (
    <div id="navbar">

      <NavLink exact to="/" activeStyle={{color: 'red'}} >Home</NavLink> | <NavLink to="/litterbox" activeClassName="selected-link">Litterbox</NavLink> | <NavLink to="/foodbowl" activeClassName="selected-link">Foodbowl</NavLink> | <NavLink to="/catalogue" activeClassName="selected-link">CATalogue</NavLink>

    </div>
  )

}

export default Navbar
