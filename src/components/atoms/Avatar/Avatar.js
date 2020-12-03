import styled from 'styled-components';

const Avatar = styled.img`
  position: absolute;
  height: 140px;
  width: 140px;
  border: 5px solid ${({ color, theme }) => theme[color]};
  border-radius: 50%;
  flex-shrink: 0;
  background-size: cover;
  z-index: 9;
`;

export default Avatar;
