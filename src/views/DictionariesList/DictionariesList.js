import React, { Component } from 'react';
import styled from 'styled-components';
import LoggedUserView from '../../templates/LoggedUserView';
import DictionaryCard from '../../components/molecules/dictionaryCard/DictionaryCard';
import ButtonIcon from '../../components/atoms/ButtonIcon/ButtonIcon';
import Modal from '../../components/organisms/Modal/Modal';

const dictionaries = [
  {
    id: 1,
    name: 'Spanish vocabulary',
    image: 'https://www.flagdetective.com/images/download/spain-state-hi.jpg',
    content: [
      {
        id: 1,
        word: 'uno',
        translation: 'jeden',
        known: false,
      },
      {
        id: 2,
        word: 'dos',
        translation: 'dwa',
        known: false,
      },
    ],
  },
  {
    id: 2,
    name: 'Swedish vocabulary',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61iE2zO0wzL._AC_SL1500_.jpg',
    content: [
      {
        id: 1,
        word: 'da',
        translation: 'nie wiem co to znaczy',
        known: false,
      },
      {
        id: 2,
        word: 'jalapenos',
        translation: 'to nie po szwecku',
        known: false,
      },
    ],
  },
];

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

  render() {
    const { isModalOpen } = this.state;
    return (
      <LoggedUserView>
        {isModalOpen && <Modal handleModal={this.handleModal} />}
        <StyledActionButton roundPlus onClick={this.handleModal} />
        <StyledWrapper isModalOpen={isModalOpen}>
          {dictionaries.map((item) => (
            <DictionaryCard
              title={item.name}
              imageUrl={item.image}
              key={item.id}
              content={item.content}
            />
          ))}
        </StyledWrapper>
      </LoggedUserView>
    );
  }
}

export default DictionariesList;
