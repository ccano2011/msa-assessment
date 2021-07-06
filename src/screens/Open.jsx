import React from 'react';
import styled from 'styled-components';

const OpenStyle = styled.div`
max-height:83vh;
overflow-y: scroll;
background-color: #000000;
border-radius: 2%;
`
const MappedTodos = styled.ul`
display: flex;
flex-direction: column;
font-family: Arial, Helvetica, sans-serif;
color:white;
align-items: center;
.todo-item{
    margin-top:20px;
    display: flex;
    width: 90vw;
    padding-top: 15px;
    padding-bottom:15px;
    padding-left: 15px;
    padding-right: 15px;
    border: 1px solid black;
    border-radius: 5%;
  background-color: #282c34;
}
.check{
    display: inline;
    margin-right: 5vw;
    width: 2.3em;
    height: 2.3em;
    background-color: white;

}
li{
    list-style: none;
}
`

function Open(props) {
    if (!props.todos) {
        return <h4>Loading...</h4>
    }
    return (
        <OpenStyle>
            <MappedTodos>
                {
                    props.todos.map((todo) =>
                        <div className="todo-item" key={todo.id}>
                            <div>
                                <input className="check" type="checkbox" checked={todo.completed} />
                                <label htmlFor="checkbox"></label>
                            </div>
                            <li >{todo.title}
                            </li>
                        </div>
                    )
                }
            </MappedTodos>
        </OpenStyle>
    );
}

export default Open;