import styled from 'styled-components';

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 35px;
  font-weight: ${({ theme }) => theme.medium};
  color: ${({ black }) => (black ? 'black' : 'white')};
`;

export default Heading;
