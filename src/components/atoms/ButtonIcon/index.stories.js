import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import bulbIcon from 'assets/icons/bulb.svg';
import linkIcon from 'assets/icons/link.svg';
import logoIcon from 'assets/icons/logo.svg';
import logoutIcon from 'assets/icons/logout.svg';
import magnifierIcon from 'assets/icons/magnifier.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from '.';

const YellowBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background: ${({ theme }) => theme.notes};
`;
storiesOf('ButtonIcon', module)
  .addDecorator(story => <YellowBg>{story()}</YellowBg>)
  .add('Bulb', () => <ButtonIcon icon={bulbIcon} />)
  .add('Link', () => <ButtonIcon active icon={linkIcon} />)
  .add('Logo', () => <ButtonIcon icon={logoIcon} />)
  .add('Logout', () => <ButtonIcon icon={logoutIcon} />)
  .add('Magnifier', () => <ButtonIcon icon={magnifierIcon} />)
  .add('Pen', () => <ButtonIcon icon={penIcon} />)
  .add('Plus', () => <ButtonIcon icon={plusIcon} />)
  .add('Twitter', () => <ButtonIcon icon={twitterIcon} />);
