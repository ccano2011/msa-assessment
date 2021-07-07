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
  max-width:375px;
    padding-top: 15px;
    padding-bottom:15px;
    padding-left: 15px;
    padding-right: 15px;
    border: 1px solid black;
    border-radius: 15px;
  background-color: #282c34;
  min-height:90px;
}

li{
    list-style: none;
    margin-left: 10px;
}
.checkbox-label {
    display: block;
    width: 35px;
    height: 45px;
    position: relative;
    margin: auto;
    margin-right: 5vw;
    cursor: pointer;
    font-size: 22px;
    line-height: 24px;
    clear: both;
}

.checkbox-label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.checkbox-label .checkbox-custom {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 45px;
    width: 45px;
    background-color: #6363636e;
    margin-top: 5px;
    border-radius: 5px;
    margin-right: 5vw;
    -webkit-transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
}

.checkbox-label .checkbox-custom::after {
    position: absolute;
    content: "";
    left: 12px;
    top: 12px;
    height: 0px;
    width: 0px;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(0deg) scale(0);
    -ms-transform: rotate(0deg) scale(0);
    transform: rotate(0deg) scale(0);
    opacity:1;
  	transition: all 0.3s ease-out;
  	-webkit-transition: all 0.3s ease-out;
  	-moz-transition: all 0.3s ease-out;
  	-ms-transition: all 0.3s ease-out;
  	-o-transition: all 0.3s ease-out;
}

.checkbox-label input:checked ~ .checkbox-custom {
    background-color: #FFFFFF;
    border-radius: 5px;
    -webkit-transform: rotate(0deg) scale(1);
    -ms-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
    opacity:1;
    border: 3px solid #32CD32;
}


.checkbox-label input:checked ~ .checkbox-custom::after {
  -webkit-transform: rotate(45deg) scale(1);
  -ms-transform: rotate(45deg) scale(1);
  transform: rotate(45deg) scale(1);
  opacity: 1;
  left: 16px;
  top: 7px;
  width: 6px;
  height: 16px;
  border-width: 0 2px 2px 0;
  background-color: transparent;
  border-radius: 0;
}

/* Style for Circular Checkbox */
.checkbox-label .checkbox-custom.circular {
    border-radius: 50%;
    /* border: 2px solid #FFFFFF; */
}

.checkbox-label input:checked ~ .checkbox-custom.circular {
    background-color: #32CD32;
    border-radius: 50%;
    width: 45px;
    height: 45px;
}
.checkbox-label input:checked ~ .checkbox-custom.circular::after {
    border: solid white;
    border-width: 0 2px 2px 0;
}
.checkbox-label .checkbox-custom.circular::after {
    border-radius: 50%;
}

.checkbox-label .checkbox-custom.circular::before {
    border-radius: 50%;
    /* border: 2px solid #FFFFFF; */
}

.checkbox-label input:checked ~ .checkbox-custom.circular::before {
    border-radius: 50%;
}

.userID{
    display:flex;
    margin-top: -35px;
    margin-bottom: 17px;
    margin-left: -115px;
    font-size: 14px;
    background-color: #6363636e;
    border-radius: 10%;
    padding: 3px;
}
`

function Open(props) {
    if (!props.todos) {
        return <h4>Loading...</h4>
    }
    return (
        <OpenStyle>
            {
                props.todos.map((todo) =>
                    <MappedTodos>
                        <div className="todo-item" key={todo.id}>
                            <div>
                                <label className="checkbox-label">
                                    <input className="check" type="checkbox" checked={todo.completed} />
                                    <span className="checkbox-custom circular"></span>
                                </label>
                            </div>
                            <li>
                                {todo.title}
                            </li>
                        </div>
                        <li className="userID">
                            User: {todo.userId}
                        </li>
                    </MappedTodos>
                )
            }
        </OpenStyle>
    );
}

export default Open;