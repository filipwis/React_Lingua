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
import { fetchWords } from '../actions';
import Axios from 'axios';

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
    currentDictionary: {
      imageUrl: '',
      name: '',
      userID: '',
    },
    isWordBarVisible: false,
  };

  componentDidMount() {
    console.log(this.props.dictionary);
    console.log(this.props.words);
    if (this.props.dictionary) {
      const [dictionary] = this.props.dictionary;

      this.setState({ currentDictionary: dictionary });
    } else {
      const { id } = this.props.match.params;
      Axios.get(`http://localhost:9000/api/dictionary/${id}`)
        .then(({ data }) => this.setState({ currentDictionary: data }))
        .catch((err) => console.log(err));
    }
    this.props.fetchWords();
  }

  handleWordBar = () => {
    this.setState((prevState) => ({ isWordBarVisible: !prevState.isWordBarVisible }));
  };

  getKnownWords = () => {
    const { words } = this.props;
    let i = 0;
    words.forEach((element) => {
      element.known && i++;
    });
    return i;
  };

  render() {
    const { words } = this.props;
    const { currentDictionary } = this.state;
    this.getKnownWords();
    if (this.state.redirect) {
      return <Redirect to={`/learning/${currentDictionary.id}`} />;
    }
    return (
      <>
        <LoggedUserView />
        <DictionaryTitle
          image={currentDictionary.imageUrl}
          title={currentDictionary.name}
          knownWords={this.getKnownWords()}
          wordsCount={words.length}
        />
        <StyledButton as={NavLink} to={`/learning/${currentDictionary.id}`}>
          Start to learn
        </StyledButton>
        <StyledWrapper>
          {words.length ? (
            words.map((item) => (
              <DictionaryWord
                key={item._id}
                word={item.word}
                known={item.known}
                translation={item.translation}
                id={item._id}
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
DictionaryView.defaultProps = {
  dictionaries: [],
  words: [],
};

const mapStateToProps = (state, ownProps) => {
  const { words, dictionaries } = state;
  if (dictionaries) {
    return {
      dictionary: dictionaries.filter((dictionary) => dictionary._id === ownProps.match.params.id),
      words,
    };
  }
  return { words };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchWords: () => dispatch(fetchWords(ownProps.match.params.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DictionaryView);
