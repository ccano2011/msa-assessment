import React from 'react';
import styled from 'styled-components';
import image from '../Assets/backarrow.png'

const Button = styled.div`
    display: flex;
    margin-left: 10vw;
    margin-top: 50px;
    position: relative;
    z-index: 9;
    /* max-height: 15px; */
    /* flex-direction: row-reverse; */
    /* margin-top: -100px; */
    /* margin-right:40px; */
    /* height: 60px; */
    /* width: auto; */
    /* position: relative; */
    /* z-index: 10; */
`

function Backarrow(props) {
    return (
        <Button>
            <img src={image} alt="back" onClick={props.toggle}></img>
        </Button>
    );
}

export default Backarrow;