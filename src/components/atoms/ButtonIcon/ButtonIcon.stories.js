import { storiesOf } from '@storybook/react';
import ButtonIcon from './ButtonIcon';
import logoutIcon from '../../../assets/icons/logout.svg';
import switchIcon from '../../../assets/icons/switch.svg';

storiesOf('ButtonIcon', module)
  .add('Standard', () => <ButtonIcon icon={logoutIcon} />)
  .add('Change', () => <ButtonIcon icon={switchIcon} />)
  .add('Round', () => <ButtonIcon roundPlus />)
  .add('Learn', () => <ButtonIcon learn>Start to learn</ButtonIcon>);
