import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.aside` //aside is an HTML element that is meant to be an acutal aside to the text content
position: fixed;
z-index:999;
width:100%;
height: 80vh;
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
.login-form-home{
    margin: 0 auto;
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
    text-align: center;
    font-size: 24px !important;
    font-weight: 500 !important;
    height: 35px !important;
    background-color: whitesmoke !important;
    border: 1px solid black;
    border-radius: 5px !important;
    text-align: center;
    margin: 0 auto;
    width: 360px;
    margin-top: 20px;
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
    font-weight: bold;
    border: none;
    color: white;
    padding: 15px 132px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.registration-text{
    text-align: center;
    font-size: x-large;
    font-weight: normal;
    padding-top:15px;
    padding-bottom:15px;
}
#register{
    margin: 0 auto;
}
.login-text{
    text-align: center;
    font-size: x-large;
    font-weight: normal;
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
`


function AddTask({ children, isOpen, toggle }) {
    return (
        <div>
            <SidebarContainer isOpen={isOpen}>
                <SidebarWrapper>
                    <LoginWrapper>
                        <form className="login-form-home">
                            <h3 className="login-text">Create ToDo</h3>
                            <input
                                className="username-home-input"
                                type='text'
                                name=''
                                placeholder='New ToDo'
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
                                <div className='signup-btn' onClick={toggle}>Cancel</div>
                            </div>
                        </form>
                    </LoginWrapper>
                </SidebarWrapper>
            </SidebarContainer>
            {children} </div>
    );
}

export default AddTask;