import React, { Component } from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import PropTypes from 'prop-types';
import Avatar from '../../atoms/Avatar/Avatar';
import HiddenDotsMenu from '../../organisms/HiddenDotsMenu/HiddenDotsMenu';
import { Redirect } from 'react-router';

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
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80vw;
  height: 120px;
  margin-top: 60px;
  margin-left: 100px;
  background-color: ${({ theme }) => theme.yellow};
  border: none;
  border-radius: 50px;
  animation: appear 1s ease;
`;

const StyledHeader = styled(Heading)`
  padding: 40px 80px;
  display: flex;
`;

const StyledAvatar = styled(Avatar)`
  top: 15px;
  right: 60px;
  display: flex;
`;

const StyledHiddenMenu = styled(HiddenDotsMenu)`
  position: absolute;
  display: flex;
  right: 0px;
`;

class DictionaryCard extends Component {
  state = {
    redirect: false,
  };
  handleCardClick = () => this.setState({ redirect: true });
  render() {
    const { title, imageUrl } = this.props;
    if (this.state.redirect) {
      return <Redirect to="/dictionary" />;
    }
    return (
      <StyledWrapper onClick={this.handleCardClick}>
        <StyledHeader>{title}</StyledHeader>
        <StyledAvatar color="yellow" src={imageUrl} />
        <StyledHiddenMenu />
      </StyledWrapper>
    );
  }
}

DictionaryCard.protoTypes = {
  imageUrl: PropTypes.string,
};

DictionaryCard.defaultProps = {
  imageUrl:
    'https://images.unsplash.com/photo-1562917616-88a9472dbfe5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
};

export default DictionaryCard;
