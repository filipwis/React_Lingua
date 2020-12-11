import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import Button from '../../atoms/Button/Button';
import arrowLeftIcon from '../../../assets/icons/arrowLeft.svg';
import arrowRightIcon from '../../../assets/icons/arrowRight.svg';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import { addWord as addWordAction } from '../../../actions';

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  bottom: 10px;
  align-items: center;
  justify-content: center;
  height: 80px;
  right: 30px;
  top: 130px;
  background-color: ${({ theme }) => theme.yellow};
  box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.3);
  border-radius: 20px;
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledForm = styled(Form)`
  padding: 0px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 800px;
  height: 90px;
  justify-content: center;
`;

const StyledPharagraph = styled.p`
  margin-top: 35px;
  display: flex;
  padding: 0 35px;
  justify-content: center;
  text-align: center;
  font-size: 25px;
`;

const StyledInputWraper = styled.div`
  width: 160px;
  height: 30px;
  margin: 35px 0;
  position: relative;
  flex-shrink: 0;
`;

const StyledBar = styled.div`
  width: 100%;
  height: 2px;
  background: #7d7d7d;
  transition: 0.1s all;
`;

const StyledInput = styled.input`
  color: #7d7d7d;
  font-size: 16px;
  border: none;
  line-height: 22px;
  width: 100%;
  background: none;
  color: white;
  text-transform: uppercase;
  text-align: center;
  ::placeholder {
    color: white;
  }

  :focus {
    outline: none;
  }

  :focus ~ ${StyledBar} {
    background: ${({ theme }) => theme.cyan};
  }
  :focus ~ ::placeholder {
    top: -22px;
    font-size: 13px;
  }
`;

const StyledAddButton = styled(Button)`
  width: 100px;
  height: 45px;
  margin-left: 45px;
  background-color: ${({ theme }) => theme.cyan};
  font-size: 16px;
  bottom: 20px;
`;

const StyledArrow = styled(ButtonIcon)`
  width: 30px;
  height: 30px;
  position: absolute;
  background-color: hsl(205, 100%, 75%);
  left: -35px;
  top: 40%;
  box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.3);

  :hover {
    background-color: ${({ theme }) => theme.cyan};
  }
`;

const DictionaryWordInput = ({ isVisible, handleBar, addWord, dictID }) => (
  <Formik
    initialValues={{
      word: '',
      translation: '',
    }}
    onSubmit={(values, actions) => {
      addWord({
        word: values.word,
        translation: values.translation,
        known: false,
        dictID,
      });
      actions.resetForm({
        values: {
          word: '',
          translation: '',
        },
      });
    }}
  >
    {({ values, handleChange, handleBlur, onSubmit }) => (
      <StyledWrapper isVisible={isVisible}>
        <StyledForm autoComplete="off">
          <StyledInputWraper>
            <StyledInput
              type="text"
              name={'word'}
              placeholder={'Word'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.word}
              onSubmit={onSubmit}
              required
            />
            <StyledBar />
          </StyledInputWraper>
          <StyledPharagraph>-</StyledPharagraph>
          <StyledInputWraper>
            <StyledInput
              type="text"
              name={'translation'}
              placeholder={'Translation'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.translation}
              onSubmit={onSubmit}
              required
            />
            <StyledBar />
          </StyledInputWraper>
          <StyledAddButton type="submit">Add</StyledAddButton>
        </StyledForm>
        <StyledArrow
          icon={({ isVisible }) => (isVisible ? arrowRightIcon : arrowLeftIcon)}
          isVisible={isVisible}
          onClick={() => handleBar()}
        />
      </StyledWrapper>
    )}
  </Formik>
);

const mapDispatchToProps = (dispatch) => ({
  addWord: (content, dictID) => dispatch(addWordAction(content, dictID)),
});

export default connect(null, mapDispatchToProps)(DictionaryWordInput);
