import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Input from '../Input/Input';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.yellow};
`;

storiesOf('Input', module)
  .addDecorator((story) => <StyledWrapper>{story()}</StyledWrapper>)
  .add('Standard', () => <Input placeholder="Lingua" />)
  .add('Search', () => <Input placeholder="Search" search />)
  .add('Translation', () => <Input placeholder="Search" trans />);
