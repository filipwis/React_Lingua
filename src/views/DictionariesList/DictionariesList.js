import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import LoggedUserView from '../../templates/LoggedUserView';
import DictionaryCard from '../../components/molecules/dictionaryCard/DictionaryCard';
import ButtonIcon from '../../components/atoms/ButtonIcon/ButtonIcon';
import Modal from '../../components/organisms/Modal/Modal';

const StyledActionButton = styled(ButtonIcon)`
  position: fixed;
  top: 150px;
  right: 40px;
`;

const StyledWrapper = styled.div`
  padding-top: 50px;
  opacity: ${({ isModalOpen }) => (isModalOpen ? '50%' : '100%')};
`;

class DictionariesList extends Component {
  state = {
    isModalOpen: false,
  };

  handleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  editDictionary = () => {
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
          {dictionaries.map((item) => (
            <DictionaryCard
              id={item.id}
              title={item.name}
              imageUrl={item.image}
              key={item.id}
              content={item.content}
              editDictionary={this.editDictionary}
            />
          ))}
        </StyledWrapper>
      </LoggedUserView>
    );
  }
}

const mapStateToProps = (state) => {
  const { dictionaries } = state;
  return { dictionaries };
};

export default connect(mapStateToProps)(DictionariesList);
