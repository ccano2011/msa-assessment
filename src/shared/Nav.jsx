import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const NavStyling = styled.div`
height: 10vh;
`

const Title = styled.h1`
color:whitesmoke;
`

const Tabs = styled.ul`
color:white;
list-style: none;
display: flex;
justify-content: space-around;
padding: 0;
padding-top: 3vh;
a{
    text-decoration: none;
    color:inherit;
}
`

function Nav() {
    return (
        <NavStyling>
            <Title>
                ToDo's
            </Title>
            <Tabs>
                <li><Link to='/'>Open</Link></li>
                <li><Link to='/closed'>Closed</Link></li>
            </Tabs>
        </NavStyling>
    );
}

export default Nav;