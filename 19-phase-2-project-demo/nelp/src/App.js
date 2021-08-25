import React, { useState, useEffect } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import ReviewsList from './components/ReviewsList'
import Review from './components/Review'
import NewReviewForm from './components/NewReviewForm'
import Navbar from './components/Navbar'
import useFetchedState from './hooks/useFetchedState'

function App() {

  const [reviews, setReviews] = useFetchedState([],'http://localhost:3000/reviews')

  console.log(reviews)

  return (
    <div className="App">

    <h1>Nelp</h1>
    <h3>We keep the mystery alive?</h3>

      <Router>

        <Navbar />

        <Switch>

          <Route exact path="/">
            <ReviewsList reviews={reviews} />
          </Route>

          <Route exact path="/reviews/new">
            <NewReviewForm />
          </Route>

          <Route exact path="/reviews/:id">
            <Review reviews={reviews} />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
