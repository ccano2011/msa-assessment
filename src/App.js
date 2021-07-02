import React from 'react'
import './App.css';
import Nav from "./shared/Nav.jsx"
import Open from "./screens/Open.jsx"
import Closed from "./screens/Closed.jsx"
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Open />
        </Route>
        <Route path='/closed'>
          <Closed />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
