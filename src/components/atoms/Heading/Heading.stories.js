import { storiesOf } from '@storybook/react';
import Heading from './Heading';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.yellow};
`;

storiesOf('Heading', module)
  .addDecorator((story) => <StyledWrapper>{story()}</StyledWrapper>)
  .add('Primary', () => <Heading>Hello Filip</Heading>)
  .add('Black', () => <Heading black>Hello Filip</Heading>);
