import { storiesOf } from '@storybook/react';
import Card from './DictionaryCard';

storiesOf('DictionaryCard', module)
  .add('Card', () => <Card />)
  .add('spain', () => (
    <Card imageUrl="https://cdn.webshopapp.com/shops/94414/files/52431402/flag-of-spain.jpg" />
  ));
