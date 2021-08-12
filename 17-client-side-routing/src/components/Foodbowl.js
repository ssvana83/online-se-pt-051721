import React from 'react'
import { Redirect } from 'react-router-dom'

function Foodbowl(props) {

  const beforeSix = ((new Date).getHours()) < 22

  return (
    <>
      <p>Serving surf and turf</p>
      {beforeSix ? <Redirect to="/catalogue" /> : null }
    </>
  )

}

export default Foodbowl
