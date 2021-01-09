import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import linguaLogo from '../../../assets/images/logo.png';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import logoutIcon from '../../../assets/icons/logout.svg';

const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  align-items: center;
  width: 100vw;
  height: 110px;
  background-color: ${({ theme }) => theme.yellow};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 999;
`;

const StyledLogo = styled(NavLink)`
  display: block;
  width: 140px;
  height: 105px;
  background-image: url(${linguaLogo});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-left: 40px;
`;

const StyledLogoutIcon = styled(ButtonIcon)`
  display: block;
  margin-right: 40px;
`;

const Bar = () => (
  <>
    <StyledWrapper>
      <StyledLogo to="/dictionaries" />
      <StyledLogoutIcon as={NavLink} to="/" icon={logoutIcon} />
    </StyledWrapper>
  </>
);

export default Bar;
