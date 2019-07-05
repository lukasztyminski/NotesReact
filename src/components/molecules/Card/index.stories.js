import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '.';

storiesOf('Card', module)
  .add('Notes', () => <Card></Card>)
  .add('Twitters', () => <Card cardType="twitters"></Card>)
  .add('Articles', () => <Card cardType="articles"></Card>);
