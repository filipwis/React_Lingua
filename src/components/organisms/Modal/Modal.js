import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 500px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.yellow};
  border-radius: 30px;
  border: none;
  box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.3);
  transition: all 5s ease-in-out;
  z-index: 9999;
`;

const StyledCloseButton = styled.button`
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme.cyan};
  border-radius: 50%;
  border: none;
  position: absolute;
  right: 35px;
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

const StyledHeading = styled(Heading)`
  position: absolute;
  top: 60px;
`;

const StyledForm = styled.form`
  margin-top: 150px;
  width: 80%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled(Input)`
  width: 350px;
  height: 40px;
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  margin-top: 60px;
`;

const Modal = ({ handleModal }) => (
  <StyledWrapper>
    <StyledCloseButton onClick={handleModal} />
    <StyledHeading>Create a new dictionary</StyledHeading>
    <StyledForm>
      <StyledInput placeholder="Name" />
      <StyledInput placeholder="Dictionary's image url" />
      <StyledButton>Create</StyledButton>
    </StyledForm>
  </StyledWrapper>
);

export default Modal;
