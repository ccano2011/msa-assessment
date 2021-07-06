import React from 'react';
import image from '../Assets/add.png';
import styled from 'styled-components';

const Button = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-top: -100px;
    margin-right:40px;
    height: 60px;
    width: auto;
    position: relative;
    z-index: 10;
`

function Add({ toggle }) {
    return (
        <Button>
            <img src={image} alt="add" onClick={toggle}></img>
        </Button>
    );
}

export default Add;