// Importing requirements
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Defining styed components
const StyledContainer = styled.div`
  background-color: rgba(43, 169, 204, 0.5);
  width: 60%;
  margin: 0 20%;
  border-radius: 15px;
  padding: 10px 0;
`;

const StyledParagraph = styled.p`
  font-weight: bold;
`;

const StyledHeader = styled.h2`
  font-size: 1.7rem;
`;

const StyledButton = styled.button`
  border-radius: 5px;
  outline: none;
  background-color: rgba(43, 169, 204, 0.7);
  margin-bottom: 15px;
`;

// Exporting LearnMore creator
export default function LearnMore(props) {
  const { personId, close } = props;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`${personId}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, [personId]);

  // return HTML structure
  return (
    <StyledContainer className="container">
      <StyledHeader>More information for {details.name}:</StyledHeader>
      {details && (
        <div>
          <StyledParagraph>Birth year: {details.birth_year} </StyledParagraph>
          <StyledParagraph>Height: {details.height}</StyledParagraph>
          <StyledParagraph>Mass: {details.mass}</StyledParagraph>
        </div>
      )}
      <StyledButton onClick={close}>Close</StyledButton>
    </StyledContainer>
  );
}
