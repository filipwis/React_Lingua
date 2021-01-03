import { Component } from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import styled from 'styled-components';
import React from 'react';
import logo from '../assets/images/logo.png';
import Heading from '../components/atoms/Heading/Heading';
import Input from '../components/atoms/Input/Input';
import Button from '../components/atoms/Button/Button';
import { authenticate as authenticateAction } from '../actions';
import { Redirect } from 'react-router-dom';

const StyledWrapper = styled.div`
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

const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 500px;
  background-color: hsl(43, 100%, 60%);
  border-radius: 50px;
  text-align: center;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  text-justify: center;
  margin-top: 45px;
`;

const StyledInput = styled(Input)`
  width: 300px;
  height: 40px;
  margin-top: 25px;
`;

const StyledButton = styled(Button)`
  margin-top: 40px;
`;
const StyledParagraphButton = styled.button`
  margin-top: 15px;
  bottom: 120px;
  right: 80px;
  font-size: 13px;
  background-color: transparent;
  border: none;
  font-family: 'Montserrat';
  font-weight: ${({ theme }) => theme.bold};
`;

class LoginRegisterView extends Component {
  state = {
    registerView: false,
  };

  handleViewType = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      registerView: !prevState.registerView,
    }));
  };

  render() {
    const { registerView } = this.state;
    const { authenticate, userID } = this.props;
    return (
      <StyledWrapper>
        <StyledLogo src={logo} />
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={({ username, password }) => {
            authenticate(username, password);
          }}
        >
          {({ handleChange, handleBlur, values }) => {
            if (userID) {
              return <Redirect to="/dictionaries" />;
            }
            return (
              <StyledForm autoComplete="off">
                <StyledHeading black>{registerView ? 'Create account' : 'Sign in'}</StyledHeading>
                <StyledInput
                  type="text"
                  name="username"
                  placeholder="E-mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <StyledInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {registerView && (
                  <StyledInput
                    type="password"
                    name="password"
                    placeholder="Confirm password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                )}
                <StyledButton type="submit">{registerView ? 'Sign up' : 'Log in'}</StyledButton>
                <StyledParagraphButton onClick={this.handleViewType}>
                  {registerView ? 'I want to log in' : 'I want my account!'}
                </StyledParagraphButton>
              </StyledForm>
            );
          }}
        </Formik>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = ({ userID = null }) => ({
  userID,
});

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegisterView);
