// Write your Character component here
// Importing requirements
import React from 'react';
import styled from 'styled-components';

// Defining styled component
const StyledCharacter = styled.div`
  font-size: 3rem;
  display: flex;
  justify-content: space-between;
  margin: 0 10% 1% 10%;
`;

const StyledButton = styled.button`
  border-radius: 10px;
  height: 40px;
  background-color: transparent;
  outline: none;
`;

export default function Character({ info, action }) {
  return (
    <StyledCharacter>
      {info.name}
      <StyledButton onclick={() => action(info.name)}>Learn more!</StyledButton>
    </StyledCharacter>
  );
}
