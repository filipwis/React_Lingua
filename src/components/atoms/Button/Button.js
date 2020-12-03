import styled from 'styled-components';

const Button = styled.button`
  justify-content: center;
  align-items: center;
  color: white;
  width: 200px;
  height: 50px;
  background-color: ${({ theme }) => theme.cyan};
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-size: 20px;
  font-weight: ${({ theme }) => theme.regular};
  text-transform: uppercase;
`;

export default Button;
