import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import LoggedUserView from '../templates/LoggedUserView';
import WordCard from '../components/molecules/WordCard/WordCard';

const StyledWordCard = styled(WordCard)`
  position: absolute;
  top: 330px;
`;

class LearningView extends Component {
  render() {
    const [currentDictionary] = this.props.dictionary;
    const { currentWords, match } = this.props;
    return (
      <LoggedUserView>
        <StyledWordCard
          dictName={currentDictionary.name}
          dictImage={currentDictionary.image}
          words={currentWords}
          dictID={match.params.id}
        />
      </LoggedUserView>
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

export default connect(mapStateToProps)(LearningView);
