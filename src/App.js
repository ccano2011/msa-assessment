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
  const [user, setUser] = useState([])

  useEffect(() => {
    const getList = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      const openResults = response.data.filter(function (notComplete) {
        return notComplete.completed === false
      })
      setTodos(openResults);
      const closedResults = response.data.filter(function (isComplete) {
        return isComplete.completed === true
      })
      setCompletedTodos(closedResults)
      const userId = response.data.filter(function (userId) {
        return userId
      })
      setUser(userId)
    };
    getList();
  }, []);

  console.log(user)
  console.log(todos)
  console.log(completedTodos)

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
