import React, { useState, useEffect } from 'react'
import './App.css';
import Litterbox from "./components/Litterbox"
import LitterboxStatus from "./components/LitterboxStatus"
import Foodbowl from "./components/Foodbowl"
import Clean from "./components/Clean"
import Cat from "./components/Cat"
import Navbar from "./components/Navbar"
import Catalogue from "./components/Catalogue"
import FourOhFour from "./components/404"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [cats, setCats] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/cats')
    .then(res => res.json())
    .then(data => {
      setCats(data)
    })
  }, [])


  return (
    <div className="App">

      <Router>

        <Navbar cats={cats} />

        <Switch>

          <Route exact path="/">
            <h1>Welcome to Cats!</h1>
          </Route>

          <Route path="/cats/:id">
            <Cat cats={cats} />
          </Route>

          <Route exact path="/litterbox">
            <Litterbox />
          </Route>

          <Route exact path="/litterbox/:status">
            <LitterboxStatus />
          </Route>

          <Route path="/foodbowl">
            <Foodbowl />
          </Route>

          <Route path="/catalogue">
            <Catalogue cats={cats} />
          </Route>

          <Route path="*">
            <FourOhFour />
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
