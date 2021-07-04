import React from 'react';
import image from '../Assets/add.png';
import styled from 'styled-components';

const Button = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-top: -50px;
    margin-right:50px;
    height: 60px;
    width: auto;
`

function Add({ toggle }) {
    return (
        <Button>
            <img src={image} alt="add" onClick={toggle}></img>
        </Button>
    );
}

export default Add;