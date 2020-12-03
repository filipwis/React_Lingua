import React from 'react';
import styled from 'styled-components';
import LoggedUserView from '../../templates/LoggedUserView';
import DictionaryCard from '../../components/molecules/dictionaryCard/DictionaryCard';
import ButtonIcon from '../../components/atoms/ButtonIcon/ButtonIcon';

const Dictionaries = [
  {
    title: 'Spanish Vocablary',
    imageUrl: 'https://cdn.countryflags.com/thumbs/sweden/flag-400.png',
  },
  {
    title: 'Spanish Vocablary fruits',
    imageUrl:
      'https://cdn11.bigcommerce.com/s-ey7tq/images/stencil/1280x1280/products/3606/18734/spain-flag__67306.1575324656.jpg?c=2',
  },
  {
    title: 'Spanish Vocablary vegetables',
    imageUrl:
      'https://cdn11.bigcommerce.com/s-ey7tq/images/stencil/1280x1280/products/3606/18734/spain-flag__67306.1575324656.jpg?c=2',
  },
  {
    title: 'Spanish Vocablary locomotion',
    imageUrl:
      'https://cdn11.bigcommerce.com/s-ey7tq/images/stencil/1280x1280/products/3606/18734/spain-flag__67306.1575324656.jpg?c=2',
  },
  {
    title: 'Swedish Vocablary',
  },
];

const StyledActionButton = styled(ButtonIcon)`
  position: fixed;
  top: 150px;
  right: 40px;
`;

const StyledWrapper = styled.div`
  padding-top: 50px;
`;

const DictionariesList = () => (
  <LoggedUserView>
    <StyledActionButton roundPlus />
    <StyledWrapper>
      {Dictionaries.map((item) => (
        <DictionaryCard title={item.title} imageUrl={item.imageUrl} />
      ))}
    </StyledWrapper>
  </LoggedUserView>
);

export default DictionariesList;
