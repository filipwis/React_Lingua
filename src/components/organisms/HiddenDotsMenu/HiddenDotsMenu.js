import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dotsIcon from '../../../assets/icons/dots.svg';
import { connect } from 'react-redux';
import { removeDictionary as removeDictionaryAction } from '../../../actions';

const StyledDotsIcon = styled.div`
  position: absolute;
  background: url(${({ icon }) => icon});
  background-size: 40px 40px;
  right: 10px;
  width: 40px;
  height: 40px;
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
`;

const StyledButton = styled.button`
  width: 140px;
  height: 35px;
  background: #e6dfdf;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  border: none;
  border-bottom: 1px solid white;
  align-items: center;
  font-family: 'Montserrat';
  font-weight: ${({ theme }) => theme.medium};

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
    const { id, removeDictionary } = this.props;

    return (
      <>
        {isMenuOpened && (
          <>
            <StyledList
              onMouseEnter={this.handleButtonAppear}
              onMouseLeave={this.handleButtonAppear}
            >
              <StyledListOptions>
                <StyledButton onClick={() => removeDictionary(id)}>Remove</StyledButton>
              </StyledListOptions>
            </StyledList>
          </>
        )}
        <StyledDotsIcon
          icon={dotsIcon}
          onMouseEnter={this.handleButtonAppear}
          onMouseLeave={this.handleButtonAppear}
        />
      </>
    );
  }
}

HiddenDotsMenu.propTypes = {
  id: PropTypes.string.isRequired,
  removeDictionary: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeDictionary: (id) => dispatch(removeDictionaryAction(id)),
});

export default connect(null, mapDispatchToProps)(HiddenDotsMenu);
