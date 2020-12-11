import React, { Component } from 'react';
import styled from 'styled-components';
import DictionaryTitle from '../components/molecules/DictionaryTitle/DictionaryTitle';
import LoggedUserView from '../templates/LoggedUserView';
import DictionaryWordInput from '../components/organisms/DictionaryWord/DictionaryWordInput';
import { connect } from 'react-redux';
import DictionaryWord from '../components/organisms/DictionaryWord/DictionaryWord';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import bulbIcon from '../assets/images/bulb.png';

const StyledButton = styled.button`
  position: fixed;
  z-index: 9999;
  display: grid;
  border: none;
  width: 150px;
  height: 50px;
  bottom: 70px;
  right: 40px;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  background-image: url(${bulbIcon});
  background-color: ${({ theme }) => theme.cyan};
  background-position: 100px 50%;
  background-repeat: no-repeat;
  border-radius: 20px;
  background-size: 50px 50px;
  box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.3);
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: white;
  font-size: 9px;
  text-transform: uppercase;
  border: 1px solid;
`;

const StyledWrapper = styled.div`
  @keyframes appear {
    0% {
      opacity: 0;
      top: 35px;
    }
    100% {
      opacity: 1;
      top: 0;
    }
  }

  position: relative;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 150px;
  animation: appear 1s ease;
`;

const StyledEmptyText = styled.div`
  @keyframes appear {
    0% {
      opacity: 0;
      top: 35px;
    }
    100% {
      opacity: 1;
      top: 0;
    }
  }

  padding: 35px;
  font-family: 'Montserrat';
  font-size: 25px;
  animation: appear 1s ease;
`;

class DictionaryView extends Component {
  state = {
    isWordBarVisible: false,
  };

  handleWordBar = () => {
    this.setState((prevState) => ({ isWordBarVisible: !prevState.isWordBarVisible }));
  };

  getKnownWords = () => {
    const { currentWords } = this.props;
    let i = 0;
    currentWords.forEach((element) => {
      element.known && i++;
    });
    return i;
  };

  render() {
    const { currentWords } = this.props;
    const [currentDictionary] = this.props.dictionary;
    this.getKnownWords();
    if (this.state.redirect) {
      return <Redirect to={`/learning/${currentDictionary.id}`} />;
    }
    return (
      <>
        <LoggedUserView />
        <DictionaryTitle
          image={currentDictionary.image}
          title={currentDictionary.name}
          knownWords={this.getKnownWords()}
          wordsCount={currentWords.length}
        />
        <StyledButton as={NavLink} to={`/learning/${currentDictionary.id}`}>
          Start to learn
        </StyledButton>
        <StyledWrapper>
          {currentWords.length ? (
            currentWords.map((item) => (
              <DictionaryWord
                key={item.id}
                word={item.word}
                known={item.known}
                translation={item.translation}
                id={item.id}
              />
            ))
          ) : (
            <StyledEmptyText>There's nothing here yet.</StyledEmptyText>
          )}
          <DictionaryWordInput
            handleBar={this.handleWordBar}
            isVisible={this.state.isWordBarVisible}
            dictID={currentDictionary.id}
          />
        </StyledWrapper>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { words, dictionaries } = state;
  return {
    currentWords: words.filter((word) => word.dictID === ownProps.match.params.id),
    dictionary: dictionaries.filter((dictionary) => dictionary.id === ownProps.match.params.id),
  };
};

export default connect(mapStateToProps)(DictionaryView);
