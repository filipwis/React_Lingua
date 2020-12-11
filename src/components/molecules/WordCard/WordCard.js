import React, { Component } from 'react';
import styled from 'styled-components';
import Avatar from '../../atoms/Avatar/Avatar';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
  @keyframes modalAppear {
    0% {
      opacity: 0;
      top: 200px;
    }
    100% {
      opacity: 1;
      top: 90;
    }
  }
  position: absolute;
  top: 90px;
  right: 30%;
  width: 600px;
  height: 400px;
  background-color: ${({ theme }) => theme.yellow};
  border-radius: 30px;
  box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.3);
  animation: modalAppear 1s ease;
`;

const StyledHeading = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 600px;
  height: 115px;
  background-color: ${({ theme }) => theme.cyan};
  border-radius: 30px;
`;

const StyledAvatar = styled(Avatar)`
  width: 120px;
  height: 120px;
  top: 20px;
  right: 30px;
`;

const StyledTitle = styled(Heading)`
  margin-top: 50px;
  width: 300px;
  overflow-wrap: break-word;
  display: flex;
  justify-content: center;
  font-size: 20px;
`;

const StyledWord = styled(Heading)`
  top: 120px;
  padding: 10px 40px;
  overflow-wrap: break-word;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledAnswer = styled(Heading)`
  top: 120px;
  padding-top: 10px;
  padding-bottom: 15px;
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
  margin: 40px auto;
  width: 340px;
  display: block;
  ::placeholder {
    text-align: center;
  }
`;

const StyledButton = styled(Button)`
  display: flex;
  margin: 0 auto;
  display: block;
`;

class WordCard extends Component {
  state = {
    checkingCard: false,
    correct: true,
    unknownWords: [
      {
        dictID: '',
        id: '',
        word: '',
        translation: '',
        known: false,
      },
    ],
  };

  componentDidMount() {
    this.setState({ unknownWords: this.props.words.filter((item) => !item.known) });
  }

  getRandomUnknownWord = () => {
    var randomIndex = this.state.unknownWords[
      Math.floor(Math.random() * this.state.unknownWords.length)
    ];
    return randomIndex;
  };

  render() {
    const { checkingCard, correct } = this.state;
    const { dictName, dictImage } = this.props;
    return (
      <StyledWrapper>
        <StyledHeading>
          {console.log(this.state.unknownWords)}
          <StyledTitle>{dictName}</StyledTitle>
          <StyledAvatar color="cyan" src={dictImage} />
        </StyledHeading>
        {this.state.unknownWords.length ? (
          <StyledCardContent>
            <StyledWord>{this.getRandomUnknownWord().word}</StyledWord>
            {!checkingCard ? (
              <>
                <StyledInput placeholder="translation" />
                <StyledButton>check</StyledButton>
              </>
            ) : (
              <>
                <StyledAnswer passed={correct}> - Translation</StyledAnswer>
                <StyledButton>next</StyledButton>
              </>
            )}
          </StyledCardContent>
        ) : (
          <StyledCardContent>
            <StyledWord>No more words to learn</StyledWord>
            <StyledButton>Back</StyledButton>
          </StyledCardContent>
        )}
      </StyledWrapper>
    );
  }
}

export default WordCard;
