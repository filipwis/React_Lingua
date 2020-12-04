import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import { connect } from 'react-redux';
import { addItem as addItemAction } from '../../../actions';
import { Formik, Form } from 'formik';

const StyledWrapper = styled.div`
  position: fixed;
  top: 450px;
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

const StyledForm = styled(Form)`
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

const Modal = ({ handleModal, addItem }) => (
  <StyledWrapper>
    <StyledCloseButton onClick={handleModal} />
    <StyledHeading>Create a new dictionary</StyledHeading>
    <Formik
      initialValues={{
        name: '',
        image: '',
      }}
      onSubmit={(values) => {
        if (values.image === '') {
          values.image =
            'https://images.unsplash.com/photo-1562917616-88a9472dbfe5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
        }
        addItem({
          name: values.name,
          image: values.image,
          content: [],
        });
        handleModal();
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <StyledForm autoComplete="off">
          <StyledInput
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            required
          />
          <StyledInput
            type="text"
            name="image"
            placeholder="Dictionary's image url"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image}
          />
          <StyledButton type="submit">Create</StyledButton>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (content) => dispatch(addItemAction(content)),
});

export default connect(null, mapDispatchToProps)(Modal);
