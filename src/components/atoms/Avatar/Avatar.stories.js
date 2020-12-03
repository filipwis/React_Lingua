import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';

storiesOf('Avatar', module).add('Avatar', () => (
  <Avatar
    color="yellow"
    src="https://images.unsplash.com/photo-1562917616-88a9472dbfe5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  />
));
