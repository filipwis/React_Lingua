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
`;

export default ButtonIcon;
