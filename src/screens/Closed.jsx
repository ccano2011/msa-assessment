import React from 'react';
import styled from 'styled-components';

const ClosedStyle = styled.div`
min-height:80vh;
`

function Closed() {
    return (
        <ClosedStyle>
            <h1>TestClosed</h1>
            <h1>TestClosed</h1>
            <h1>TestClosed</h1>
            <h1>TestClosed</h1>
            <h1>TestClosed</h1>
        </ClosedStyle>
    );
}

export default Closed;