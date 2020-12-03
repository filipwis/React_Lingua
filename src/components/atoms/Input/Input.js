import styled, { css } from 'styled-components';
import magnifierIcon from '../../../assets/icons/magnifier.svg';

const Input = styled.input`
  padding: 10px 20px;
  background-color: white;
  border: none;
  border-radius: 50px;

  ::placeholder {
    color: ${({ theme }) => theme.grey};
    font-weight: ${({ theme }) => theme.semiBold};
    text-transform: uppercase;
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      background-size: 15px;
      background-image: url(${magnifierIcon});
      background-repeat: no-repeat;
      background-position: 15px 50%;
    `}

  ${({ trans }) =>
    trans &&
    css`
      font-size: 16px;
      border: none;
      line-height: 22px;
      width: 100%;
      background: none;
    `}
`;

export default Input;
