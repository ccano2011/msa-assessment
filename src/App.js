import React, { useState, useEffect } from 'react'
import './App.css';
import Nav from "./shared/Nav.jsx"
import AddTask from './screens/AddTask';
import Open from "./screens/Open.jsx"
import Closed from "./screens/Closed.jsx"
import Add from "./buttons/Add.jsx"
import { Switch, Route } from 'react-router-dom'
import axios from "axios"

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [todos, setTodos] = useState([])
  const [completedTodos, setCompletedTodos] = useState([])

  useEffect(() => {
    const getList = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setTodos(response.data);
      const filteredResults = response.data.filter(function (isComplete) {
        return isComplete.completed
      })
      setCompletedTodos(filteredResults)
    };
    getList();
  }, []);


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
            <Open
              todos={todos}
              setTodos={setTodos}
            />
          </Route>
          <Route path='/closed'>
            <Closed
              todos={completedTodos}
            />
          </Route>
        </Switch>
        <Add toggle={toggle} />
      </AddTask>
    </div >
  );
}

export default App;
