import React, { useState } from 'react';
import TeamList from './TeamList';
import Form from './Form';
import './App.css';
import styled from 'styled-components';

const StyledApp = styled.div
`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0047b3;
`

const initialTeam = [
  { name: "Bob Ross", nickName: "Rob Boss", email: "boss@email.com", role: "Boss"}
]

const initialFormValues = {
  name: "",
  nickName: "",
  email: "",
  role: ""
}

function App() {
  const [team, setTeam] = useState(initialTeam);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      nickName: formValues.nickName.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    setTeam(team.concat(newTeamMember));
    setFormValues(initialFormValues); 
  }

  return (
    <StyledApp>
      <h1>Bob's Warehouse Team</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      { team.map(tm => {
        return (
          <TeamList 
            key={tm.name}
            name={tm.name}
            nickName={tm.nickName}
            email={tm.email}
            role={tm.role}
          />
        )
      }) }
    </StyledApp>
  )
}

export default App;
