import styled, { css } from 'styled-components';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import editIcon from '../../../assets/icons/edit.svg';

const StyledWrapper = styled.div`
  padding: 0px 80px 0px 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 600px;
  height: 90px;
`;

const StyledWord = styled.p`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 24px 0;
  position: relative;
  text-transform: uppercase;

  ${({ noPadding }) =>
    noPadding &&
    css`
      width: 15px;
      padding: 30px;
      font-size: 25px;
    `}
`;

const StyledCloseButton = styled.button`
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme.yellow};
  border-radius: 5px;
  border: none;
  position: absolute;
  right: 15px;
  top: 25px;

  &::before,
  &::after {
    content: '';
    width: 18px;
    height: 2px;
    position: absolute;
    background: white;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    transform-origin: 50%;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

// const StyledEditIcon = styled(ButtonIcon)`
//   width: 30px;
//   height: 30px;
//   position: absolute;
//   border-radius: 5px;
//   background-color: ${({ theme }) => theme.yellow};
//   background-size: 25px 25px;
//   right: 55px;
//   top: 25px;
// `;

const DictionaryWord = ({ word, translation }) => (
  <StyledWrapper>
    <StyledWord>{word}</StyledWord>
    <StyledWord noPadding>-</StyledWord>
    <StyledWord>{translation}</StyledWord>
    <StyledCloseButton />
  </StyledWrapper>
);

export default DictionaryWord;
