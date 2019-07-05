import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Sidebar from '.';

storiesOf('Organisms/Sidebar', module)
  .addDecorator(StoryRouter())
  .add('Normal', () => <Sidebar />)
  .add('Secondary', () => <Sidebar sidebarType="articles" />)
  .add('Tertiary', () => <Sidebar sidebarType="twitters" />);
