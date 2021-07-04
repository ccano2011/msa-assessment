import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom' //This is an alias to workaround { Link } declarations

const SidebarContainer = styled.aside` //aside is an HTML element that is meant to be an acutal aside to the text content
@media screen and (min-width:769px){
display:none;
}
position: fixed;
z-index:999;
width:100%;
height: 80vh;
background:black;
align-items: center;
border-radius: 15px;
bottom:0;
left:0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
bottom:${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const SidebarWrapper = styled.div`
display: none;
@media screen and (max-width:768px){
    display: grid;
}
.ls{
    color:white;
}
`;
const SidebarMenu = styled.ul`
display: grid;
grid-template-columns:1fr;
grid-template-rows: repeat(6, 100px);
padding-left:0;
text-align: center;
`;


function AddTask({ children, isOpen, toggle }) {
    return (
        <div>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <SidebarWrapper>
                    <div className="ls">test</div>
                </SidebarWrapper>
            </SidebarContainer>
            {children} </div>
    );
}

export default AddTask;