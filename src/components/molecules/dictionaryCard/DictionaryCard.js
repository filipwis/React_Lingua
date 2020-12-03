import React, { Component } from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import PropTypes from 'prop-types';
import Avatar from '../../atoms/Avatar/Avatar';
import { Redirect } from 'react-router';

const StyledWrapper = styled.div`
  position: relative;
  margin-top: 60px;
  margin-left: 100px;
  width: 80vw;
  height: 120px;
  background-color: ${({ theme }) => theme.yellow};
  border: none;
  border-radius: 50px;
  box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.3);
`;

const StyledHeader = styled(Heading)`
  padding: 40px 80px;
`;

const StyledAvatar = styled(Avatar)`
  top: 15px;
  right: 32px;
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
