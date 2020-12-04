import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import dotsIcon from '../../../assets/icons/dots.svg';

const StyledDotsIcon = styled(ButtonIcon)`
  position: absolute;
  right: 10px;
`;

const StyledList = styled.ul`
  position: absolute;
  top: 40px;
  right: -125px;
  list-style-type: none;
  flex-direction: column;
`;

const StyledListOptions = styled.li`
  width: 140px;
  height: 35px;
  background: #e6dfdf;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  border-bottom: 1px solid white;
  align-items: center;

  :hover {
    background: #dcd0d0;
  }
`;

class HiddenDotsMenu extends Component {
  state = {
    isMenuOpened: false,
  };

  handleButtonAppear = () => {
    this.setState((prevState) => ({
      isMenuOpened: !prevState.isMenuOpened,
    }));
  };

  render() {
    const { isMenuOpened } = this.state;
    return (
      <>
        {isMenuOpened && (
          <>
            <StyledList
              onMouseEnter={this.handleButtonAppear}
              onMouseLeave={this.handleButtonAppear}
            >
              <StyledListOptions>Edit</StyledListOptions>
              <StyledListOptions>Remove</StyledListOptions>
            </StyledList>
          </>
        )}
        <StyledDotsIcon
          onClick={null}
          icon={dotsIcon}
          onMouseEnter={this.handleButtonAppear}
          onMouseLeave={this.handleButtonAppear}
        />
      </>
    );
  }
}

export default HiddenDotsMenu;
