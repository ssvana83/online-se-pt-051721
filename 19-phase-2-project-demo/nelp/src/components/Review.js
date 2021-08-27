import React from 'react'
import { useParams, Redirect, useHistory } from 'react-router-dom'

function Review({reviews}) {

  const params = useParams()
  const history = useHistory()

  const foundReview = reviews.find(review => review.id === parseInt(params.id))

  if (foundReview) {
    return (
      <div>

        <h3>{foundReview.restaurant}</h3>
        <p>{foundReview.rating} stars</p>
        <p>{foundReview.content}</p>

        <button onClick={() => history.push(`/reviews/${foundReview.id}/edit`)}>Edit</button>

      </div>
    )
  } else {
    alert("Mysterious alert! Something is going wrong but we won't tell you! LOL")
    return (<Redirect to="/" />)
  }

}

export default Review
