import React from 'react';
import styled, { css } from 'styled-components';
import Avatar from '../../atoms/Avatar/Avatar';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import { Component } from 'react';

const StyledWrapper = styled.div`
  width: 720px;
  height: 500px;
  background-color: ${({ theme }) => theme.yellow};
  border-radius: 30px;
  box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.3);
`;

const StyledHeading = styled.div`
  position: relative;
  text-align: center;
  width: 720px;
  height: 135px;
  background-color: ${({ theme }) => theme.cyan};
  border-radius: 30px;
`;

const StyledAvatar = styled(Avatar)`
  top: 15px;
  right: 30px;
`;

const StyledTitle = styled(Heading)`
  padding-top: 40px;
  overflow-wrap: break-word;

  ${({ content }) =>
    content &&
    css`
      font-weight: ${({ theme }) => theme.bold};
    `}
`;

const StyledAnswer = styled(Heading)`
  padding-top: 10px;
  padding-bottom: 35px;
  overflow-wrap: break-word;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ passed, theme }) => (passed ? theme.green : theme.red)};
`;

const StyledCardContent = styled.div`
  position: relative;
  text-align: center;
  align-items: center;
`;

const StyledInput = styled(Input)`
  position: relative;
  margin: 50px auto;
  width: 340px;
  display: block;
`;

const StyledButton = styled(Button)`
  position: relative;
  margin: 15px auto;
  display: block;
`;

class WordCard extends Component {
  state = {
    checkingCard: true,
    correct: true,
  };
  render() {
    const { checkingCard, correct } = this.state;
    return (
      <StyledWrapper>
        <StyledHeading>
          <StyledTitle>Title</StyledTitle>
          <StyledAvatar
            color="cyan"
            src="https://images.unsplash.com/photo-1562917616-88a9472dbfe5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
        </StyledHeading>
        <StyledCardContent>
          <StyledTitle>Hello</StyledTitle>
          {!checkingCard ? (
            <StyledInput placeholder="translation" />
          ) : (
            <StyledAnswer passed={correct}> - Translation</StyledAnswer>
          )}
          <StyledButton>{!checkingCard ? 'check' : 'next'}</StyledButton>
        </StyledCardContent>
      </StyledWrapper>
    );
  }
}

export default WordCard;
