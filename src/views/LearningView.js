import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import LoggedUserView from '../templates/LoggedUserView';
import WordCard from '../components/molecules/WordCard/WordCard';
import Axios from 'axios';

const StyledWordCard = styled(WordCard)`
  position: absolute;
  top: 330px;
`;

class LearningView extends Component {
  state = {
    currentDictionary: {
      imageUrl: '',
      name: '',
      userID: '',
    },
  };

  componentDidMount() {
    if (this.props.dictionary) {
      const [dictionary] = this.props.dictionary;
      console.log(dictionary);
      this.setState({ currentDictionary: dictionary });
    } else {
      const { id } = this.props.match.params;
      Axios.get(`http://localhost:9000/api/dictionary/${id}`)
        .then(({ data }) => this.setState({ currentDictionary: data }))
        .catch((err) => console.log(err));
    }
  }
  render() {
    const { currentDictionary } = this.state;
    const { match } = this.props;
    return (
      <LoggedUserView>
        <StyledWordCard
          dictName={currentDictionary.name}
          dictImage={currentDictionary.imageUrl}
          dictID={match.params.id}
        />
      </LoggedUserView>
    );
  }
}

LearningView.defaultProps = {
  dictionaries: [],
};

const mapStateToProps = (state, ownProps) => {
  const { dictionaries } = state;
  if (dictionaries) {
    return {
      dictionary: dictionaries.filter((dictionary) => dictionary._id === ownProps.match.params.id),
    };
  }
  return {};
};

export default connect(mapStateToProps)(LearningView);
