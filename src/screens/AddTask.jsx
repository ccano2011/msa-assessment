import React from 'react';
import styled from 'styled-components';
import Backarrow from '../buttons/Backarrow';

const SidebarContainer = styled.aside` //aside is an HTML element that is meant to be an acutal aside to the text content
    position: fixed;
    z-index:999;
    width:100%;
    text-align: center;
    height: 95vh;
    background: #000000;
    align-items: center;
    border-radius: 15px;
    bottom:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    bottom:${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const SidebarWrapper = styled.div`
    display: grid;
.ls{
    color:white;
}
`;
const LoginWrapper = styled.div`
margin-top: -65px;
.login-form-home{
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    /* font-family: 'Dosis', sans-serif; */
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    width: 360px;
    padding-top: 20px;
    padding-bottom: 30px;
}

.ourStoryBio {
    display: flex;
    max-width: 1280px;
    align-items: center;
    margin-top: -50px;
    font-size: x-large;
}

.buttons-home {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
}
/* 
.register-home {
    display: flex;
    flex-direction: column;
    align-items:center;
} */
.username-home-input {
    /* font-family: 'Dosis', sans-serif; */
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;
    font-size: 14px !important;
    font-weight: 500 !important;
    height: 45px !important;
    background-color: #282c34;
    color: white;
    border: 1px solid black;
    border-radius: 15px !important;
    margin: 0 auto;
    padding-left: 15px;
    width: 330px;
    margin-top: 20px;
}

#input{
    color: white;
}

.login-label {
    font-family: 'Dosis', sans-serif !important;
    text-align: left;
    margin-top: -2px;
    margin-left: 50px;
    font-size: 22px;
}

.input-div {
    height: 50px;
    padding-top: 10px;
}

.login-button {
    background-color: #4CAF50; 
    font-family: Arial, Helvetica, sans-serif;
    border: none;
    color: white;
    height: 50px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    width: 280px;
    border-radius: 10px;
}

.registration-text{
    text-align: center;
    font-size: x-large;
    font-weight: normal;
    padding-top:15px;
    padding-bottom:15px;
}

.login-text{
    text-align: center;
    font-size: x-large;
    font-weight: normal;
    margin-bottom: 45px;
}

.signup-btn {
    margin-top: 20px;
    height: 35px;
    font-family: Arial, Helvetica, sans-serif;
    width: 130px;
    color:white;
    font-weight: bold;
    font-size: 15px;
    outline: none;
    background-color: #0000; 
    text-align: center;
}
option{
    color: white;
}
`


function AddTask({ children, isOpen, toggle }) {
    return (
        <div>
            <SidebarContainer isOpen={isOpen}>
                <SidebarWrapper>
                    <Backarrow toggle={toggle} />
                    <LoginWrapper>
                        <form className="login-form-home">
                            <h3 className="login-text">New Todo</h3>
                            <input
                                className="username-home-input"
                                id="input"
                                type='text'
                                name=''
                                placeholder='New Todo'
                            />
                            <select
                                className="username-home-input"
                                type='password'
                                name='password'
                                placeholder='Password'
                            >
                                <option value="User">User</option>
                                <option value="User2">User 2</option>
                                <option value="User3">User 3</option>
                            </select>
                            <select
                                className="username-home-input"
                                type='password'
                                name='password'
                                placeholder='Password'
                            >
                                <option value="Status">Status</option>
                                <option value="Open">Open</option>
                                <option value="Closed">Closed</option>
                            </select>
                            <br />

                            <div className="buttons-home">
                                <button className='login-button' type="submit">Finish</button>
                                <div className='signup-btn' onClick={toggle}>Quit</div>
                            </div>
                        </form>
                    </LoginWrapper>
                </SidebarWrapper>
            </SidebarContainer>
            {children} </div>
    );
}

export default AddTask;