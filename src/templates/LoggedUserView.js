import React from 'react';
import Bar from '../components/organisms/Bar/Bar';
import styled from 'styled-components';
import Loader from '../components/organisms/Loader/Loader';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  position: relative;
  margin-top: 120px;
`;
const StyledLoadingWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 250px;
  justify-content: center;
`;
const LoggedUserView = ({ children, isLoading }) => (
  <>
    <Bar />
    <StyledWrapper>
      {isLoading ? (
        <StyledLoadingWrapper>
          <Loader />
        </StyledLoadingWrapper>
      ) : (
        children
      )}
    </StyledWrapper>
  </>
);

const mapStateToProps = ({ isLoading }) => ({
  isLoading,
});

export default connect(mapStateToProps)(LoggedUserView);
