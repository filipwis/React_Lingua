import React, { Component } from 'react';
import { Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Avatar from '../../atoms/Avatar/Avatar';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import { updateWord as updateWordAction } from '../../../actions';
import Axios from 'axios';

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
  text-transform: uppercase;
  ::placeholder {
    text-align: center;
  }
`;

const StyledButton = styled(Button)`
  display: flex;
  margin: 0 auto;
  text-decoration: none;
`;

class WordCard extends Component {
  state = {
    checkingCard: false,
    correct: true,
    unknownWord: {
      dictID: '',
      id: '',
      word: '',
      translation: '',
    },
    unknownWords: [
      {
        dictID: '',
        id: '',
        word: '',
        translation: '',
      },
    ],
    wordsOfDictionary: [],
  };

  async componentDidMount() {
    if (this.props.dictionary) {
      const [words] = this.props.wordsOfDictionary;
      this.setState({ currentDictionary: words });
    } else {
      await Axios.get('http://localhost:9000/api/words', {
        params: {
          dictID: this.props.dictID,
        },
      })
        .then(({ data }) => this.setState({ wordsOfDictionary: data }))
        .catch((err) => console.log(err));
    }
    await this.setState({
      unknownWords: this.state.wordsOfDictionary.filter((item) => !item.known),
    });
    this.getRandomUnknownWord();
  }

  // async componentDidMount() {
  //   await this.setState({
  //     unknownWords: this.props.words.filter((item) => !item.known),
  //   });
  //   this.getRandomUnknownWord();
  //   console.log(this.props.words);
  // }

  getRandomUnknownWord = () => {
    const randomIndex = this.state.unknownWords[
      Math.floor(Math.random() * this.state.unknownWords.length)
    ];
    this.setState({ unknownWord: randomIndex });
  };

  handleNextButton = () => {
    this.setState({ checkingCard: false });
    this.componentDidMount();
  };

  render() {
    const { checkingCard, correct, unknownWord, wordsOfDictionary } = this.state;
    const { dictName, dictImage, dictID, updateWord } = this.props;
    return (
      <StyledWrapper>
        {console.log(wordsOfDictionary)}
        <StyledHeading>
          <StyledTitle>{dictName}</StyledTitle>
          <StyledAvatar color="cyan" src={dictImage} />
        </StyledHeading>
        {this.state.unknownWords.length ? (
          <StyledCardContent>
            <StyledWord>{unknownWord.word}</StyledWord>
            {!checkingCard ? (
              <Formik
                initialValues={{
                  translation: '',
                }}
                onSubmit={(values) => {
                  this.setState({ checkingCard: true });
                  if (
                    values.translation.toUpperCase().trim() ===
                    unknownWord.translation.toUpperCase().trim()
                  ) {
                    this.setState({ correct: true });
                    updateWord(unknownWord);
                  } else {
                    this.setState({ correct: false });
                  }
                }}
              >
                {({ values, handleChange, handleBlur, onSubmit }) => (
                  <Form>
                    <StyledInput
                      autoComplete="off"
                      type="text"
                      name={'translation'}
                      placeholder={'Translation'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.translation}
                      onSubmit={onSubmit}
                    />
                    <StyledButton type="submit">check</StyledButton>
                  </Form>
                )}
              </Formik>
            ) : (
              <>
                <StyledAnswer passed={correct}> - {unknownWord.translation}</StyledAnswer>
                <StyledButton onClick={() => this.handleNextButton()}>next</StyledButton>
              </>
            )}
          </StyledCardContent>
        ) : (
          <StyledCardContent>
            <StyledWord>No more words to learn</StyledWord>
            <StyledButton as={NavLink} to={`/dictionary/${dictID}`}>
              Back
            </StyledButton>
          </StyledCardContent>
        )}
      </StyledWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { words } = state;
  if (words) {
    return {
      wordsOfDictionary: words.filter((word) => word.dictID === ownProps.dictID),
    };
  }
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  updateWord: (wordContent) => dispatch(updateWordAction(wordContent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WordCard);
