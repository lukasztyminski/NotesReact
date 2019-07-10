import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import bulbIcon from 'assets/icons/bulb.svg';
import logoIcon from 'assets/icons/logo.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from 'components/atoms/ButtonIcon';
import { routes } from 'routes';
import { WrapSidebar, WrapMenuLink } from './style';

const LogoIcon = styled(NavLink)`
  display: block;
  border: none;
  width: 67px;
  height: 67px;
  background: url(${logoIcon}) no-repeat center;
  background-size: 90%;
  border: none;
  margin-bottom: 10vh;
`;

const BigIcon = styled(ButtonIcon)`
  background-size: 50%;
`;

const Sidebar = ({ pageType }) => (
  <WrapSidebar activeColor={pageType}>
    <LogoIcon to={routes.notes} />
    <WrapMenuLink>
      <li>
        <BigIcon exact as={NavLink} to={routes.notes} icon={penIcon} activeclass="active" />
      </li>
      <li>
        <BigIcon as={NavLink} to={routes.twitters} icon={twitterIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to={routes.articles} icon={bulbIcon} activeclass="active" />
      </li>
    </WrapMenuLink>
    <BigIcon as={NavLink} to={routes.login} icon={logoutIcon} />
  </WrapSidebar>
);

Sidebar.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default Sidebar;
