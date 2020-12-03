import React from 'react';
import styled from 'styled-components';
import WordInput from '../../atoms/Input/WordInput';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 680px;
  height: 60px;
  /* border: 1px solid; */
`;

const StyledWordInput = styled(WordInput)``;

const StyledPharagraph = styled.p`
  display: flex;
  padding: 0 25px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 25px;
`;

const DictionaryWord = () => (
  <StyledWrapper>
    <StyledWordInput placeholder="Word" />
    <StyledPharagraph>-</StyledPharagraph>
    <StyledWordInput placeholder="Translation" />
  </StyledWrapper>
);

export default DictionaryWord;
