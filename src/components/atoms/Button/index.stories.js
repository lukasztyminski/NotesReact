import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from '.';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => {
    const label = 'Colors';
    const options = {
      notes: 'hsl(49, 100%, 58%)',
      twitters: 'hsl(196, 83%, 75%)',
      articles: 'hsl(106, 47%, 64%)',
    };
    const defaultValue = 'hsl(49, 100%, 58%)';
    const groupId = 'GROUP-ID1';

    const value = select(label, options, defaultValue, groupId);
    return <Button color={value}>Hello Tymon</Button>;
  })
  .add('Remove', () => <Button remove>Remove</Button>);
