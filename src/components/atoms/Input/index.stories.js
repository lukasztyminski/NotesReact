import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '.';

storiesOf('Input', module)
  .add('Normal', () => <Input placeholder="login" />)
  .add('Search', () => <Input placeholder="search" search />);
