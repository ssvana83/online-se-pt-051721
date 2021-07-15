import React from 'react'

function Card({title = 'My Camping Trip', caption, img}) {

  const pi = Math.PI

  console.log(pi);

  return (
    <>

      <h3>{title}</h3>
      <img src={img} alt={caption} />
      <p>{caption}</p>

    </>
  )

}

export default Card
