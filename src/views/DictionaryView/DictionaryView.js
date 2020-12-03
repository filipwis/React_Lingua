import React from 'react';
import styled, { css } from 'styled-components';
import ButtonIcon from '../../components/atoms/ButtonIcon/ButtonIcon';
import DictionaryTitle from '../../components/molecules/DictionaryTitle/DictionaryTitle';
import LoggedUserView from '../../templates/LoggedUserView';
import switchIcon from '../../assets/icons/switch.svg';
import DictionaryWord from '../../components/organisms/DictionaryWord/DictionaryWord';

const StyledButton = styled(ButtonIcon)`
  margin: 0px auto;
  ${({ learn }) =>
    learn &&
    css`
      position: absolute;
      top: 150px;
      right: 40px;
    `}
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledInputs = styled(DictionaryWord)``;

const DictionaryView = () => (
  <>
    <LoggedUserView />
    <DictionaryTitle />
    <StyledButton learn>Start to learn</StyledButton>
    <StyledButton icon={switchIcon} />
    <StyledWrapper>
      <StyledInputs />
      <StyledInputs />
      <StyledInputs />
      <StyledInputs />
      <StyledInputs />
      <StyledInputs />
      <StyledInputs />
      <StyledInputs />
      <StyledInputs />
    </StyledWrapper>
  </>
);

export default DictionaryView;
