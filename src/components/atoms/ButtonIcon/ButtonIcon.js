import styled, { css } from 'styled-components';
import bulbIcon from '../../../assets/images/bulb.png';
import plusIcon from '../../../assets/icons/plus.svg';

const ButtonIcon = styled.button`
  display: grid;
  width: 40px;
  height: 40px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 30px 30px;
  background-color: transparent;
  border: none;
  border-radius: 20px;

  ${({ roundPlus }) =>
    roundPlus &&
    css`
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-image: url(${plusIcon});
      background-color: ${({ theme }) => theme.cyan};
      background-size: 45%;
    `}

  ${({ learn }) =>
    learn &&
    css`
      align-items: center;
      justify-content: space-between;
      padding-left: 30px;
      width: 150px;
      height: 50px;
      background-image: url(${bulbIcon});
      background-color: ${({ theme }) => theme.cyan};
      background-position: 100px 50%;
      border-radius: 20px;
      background-size: 50px 50px;
      box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.3);
      font-family: 'Montserrat', sans-serif;
      color: white;
      font-size: 9px;
      text-transform: uppercase;
    `}
`;

export default ButtonIcon;
