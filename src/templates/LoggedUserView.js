import React from 'react';
import Bar from '../components/organisms/Bar/Bar';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  position: relative;
  margin-top: 120px;
`;

const LoggedUserView = ({ children }) => (
  <>
    <Bar />
    <StyledWrapper>{children}</StyledWrapper>
  </>
);

LoggedUserView.propTypes = {
  // children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  // children: PropTypes.node.isRequired,
};

export default LoggedUserView;
