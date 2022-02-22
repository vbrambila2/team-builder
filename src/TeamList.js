import React from 'react';
import styled from 'styled-components';
import './App.css';

const StyledTeamList = styled.div
`
margin: 1em;
padding: 1em;
display: flex;
flex-direction: column;
align-items: center;
font-size: 1.5em;
letter-spacing: 0.05em;
border: 0.2em solid white;
border-radius: 1em;
width: 30%;
background-color: navy;
color: white;
`

export default function TeamList(props) {
    const { name, nickName, email, role } = props;

    return (
        <StyledTeamList>
            <div>{ name } aka "{ nickName }"</div>
            <div className="email">{ email }</div>
            <div>-{ role }-</div>
        </StyledTeamList>
    )
}