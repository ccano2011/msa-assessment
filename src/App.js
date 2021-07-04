import React, { useState } from 'react'
import './App.css';
import Nav from "./shared/Nav.jsx"
import AddTask from './screens/AddTask';
import Open from "./screens/Open.jsx"
import Closed from "./screens/Closed.jsx"
import Add from "./buttons/Add.jsx"
import { Switch, Route } from 'react-router-dom'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  isOpen ? console.log('its open') : console.log('its closed');

  return (
    <div className="App">
      <AddTask isOpen={isOpen} toggle={toggle} >
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Open />
          </Route>
          <Route path='/closed'>
            <Closed />
          </Route>
        </Switch>
        <Add toggle={toggle} />
      </AddTask>
    </div >
  );
}

export default App;
