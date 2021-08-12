import React from 'react'
import { useParams } from 'react-router-dom'

function Litterbox() {

  const {status} = useParams()

  return (
    <p>My status is {status}</p>
  )

}

export default Litterbox
