import React from 'react';
import styled from 'styled-components';

const OpenStyle = styled.div`
min-height:80vh;
`

function Open() {
    return (
        <OpenStyle>
            <h1>TestOpen</h1>
            <h1>TestOpen</h1>
            <h1>TestOpen</h1>
            <h1>TestOpen</h1>
            <h1>TestOpen</h1>
        </OpenStyle>
    );
}

export default Open;