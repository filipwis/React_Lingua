import React, { Component } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 300px;
  margin: 24px 0;
  position: relative;
  flex-shrink: 0;
`;

const StyledBar = styled.div`
  width: 100%;
  height: 2px;
  background: #7d7d7d;
  transition: 0.1s all;
`;

const StyledInput = styled.input`
  padding-left: 15px;
  color: #7d7d7d;
  font-size: 16px;
  border: none;
  line-height: 22px;
  width: 100%;
  background: none;
  text-transform: uppercase;

  :focus {
    outline: none;
  }

  :focus ~ ${StyledBar} {
    background: ${({ theme }) => theme.yellow};
  }
  :focus ~ ::placeholder {
    top: -22px;
    font-size: 13px;
  }
`;

const WordInput = ({ placeholder }) => (
  <StyledWrapper>
    <StyledInput placeholder={placeholder} />
    <StyledBar />
  </StyledWrapper>
);

export default WordInput;
