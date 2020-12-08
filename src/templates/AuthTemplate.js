import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const StyledWrapper = styled.div`
  z-index: -1;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.yellow};
`;

const StyledLogo = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 250px;
`;

const AuthTemplate = () => (
  <StyledWrapper>
    <StyledLogo src={logo} />
  </StyledWrapper>
);

export default AuthTemplate;
