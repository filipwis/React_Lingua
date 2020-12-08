import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import DictionaryTitle from '../components/molecules/DictionaryTitle/DictionaryTitle';
import LoggedUserView from '../templates/LoggedUserView';
import DictionaryWordInput from '../components/organisms/DictionaryWord/DictionaryWordInput';
import { connect } from 'react-redux';
import DictionaryWord from '../components/organisms/DictionaryWord/DictionaryWord';

const StyledButton = styled(ButtonIcon)`
  margin: 0px auto;
  ${({ learn }) =>
    learn &&
    css`
      position: fixed;
      bottom: 50px;
      right: 40px;
    `}
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
    isWordBarVisible: true,
    words: [
      {
        word: '',
        translation: '',
        known: false,
      },
    ],
  };

  handleWordBar = () => {
    this.setState((prevState) => ({ isWordBarVisible: !prevState.isWordBarVisible }));
  };

  render() {
    const [currentDictionary] = this.props.dictionary;
    const { isWordBarVisible } = this.state;
    return (
      <>
        <LoggedUserView />
        <DictionaryTitle image={currentDictionary.image} title={currentDictionary.name} />
        <StyledButton learn>Start to learn</StyledButton>
        <StyledWrapper>
          {currentDictionary.content.length ? (
            currentDictionary.content.map(
              (item) =>
                !item.known && (
                  <DictionaryWord
                    key={item.id}
                    word={item.word}
                    known={item.known}
                    translation={item.translation}
                  />
                ),
            )
          ) : (
            <StyledEmptyText>There's nothing here yet.</StyledEmptyText>
          )}
          <DictionaryWordInput handleBar={this.handleWordBar} isVisible={isWordBarVisible} />
        </StyledWrapper>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { dictionaries } = state;
  return {
    dictionary: dictionaries.filter((dictionary) => dictionary.id === ownProps.match.params.id),
  };
};

export default connect(mapStateToProps)(DictionaryView);
