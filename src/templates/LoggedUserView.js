import React from 'react';
import Bar from '../components/organisms/Bar/Bar';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  margin-top: 120px;
`;

const LoggedUserView = ({ children }) => (
  <>
    <Bar />
    <StyledWrapper>{children}</StyledWrapper>
  </>
);

LoggedUserView.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LoggedUserView;
