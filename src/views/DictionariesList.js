import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import LoggedUserView from '../templates/LoggedUserView';
import DictionaryCard from '../components/molecules/DictionaryCard/DictionaryCard';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import Modal from '../components/organisms/Modal/Modal';
import { fetchDictionaries } from '../actions';

const StyledActionButton = styled(ButtonIcon)`
  position: fixed;
  top: 150px;
  right: 40px;
`;

const StyledWrapper = styled.div`
  padding-top: 50px;
  opacity: ${({ isModalOpen }) => (isModalOpen ? '50%' : '100%')};
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

  padding: 0 35px;
  font-family: 'Montserrat';
  font-size: 25px;
  animation: appear 1s ease;
`;

class DictionariesList extends Component {
  state = {
    isModalOpen: false,
  };

  componentDidMount() {
    this.props.fetchDictionaries();
  }

  handleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const { isModalOpen } = this.state;
    const { dictionaries } = this.props;

    return (
      <LoggedUserView>
        {isModalOpen && <Modal handleModal={this.handleModal} />}
        <StyledActionButton roundPlus onClick={this.handleModal} />
        <StyledWrapper isModalOpen={isModalOpen}>
          {dictionaries.length ? (
            dictionaries.map((item) => (
              <DictionaryCard
                id={item._id}
                title={item.name}
                imageUrl={item.imageUrl}
                key={item._id}
              />
            ))
          ) : (
            <StyledEmptyText>Create a new dictionary to expand your horizons... 🌍</StyledEmptyText>
          )}
        </StyledWrapper>
      </LoggedUserView>
    );
  }
}

DictionariesList.defaultProps = {
  dictionaries: [],
};

const mapStateToProps = (state) => {
  const { dictionaries } = state;
  return { dictionaries };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDictionaries: () => dispatch(fetchDictionaries()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DictionariesList);
