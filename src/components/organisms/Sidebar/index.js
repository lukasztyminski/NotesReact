import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import bulbIcon from 'assets/icons/bulb.svg';
import logoIcon from 'assets/icons/logo.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from 'components/atoms/ButtonIcon';
import { WrapSidebar } from './style';

const Sidebar = ({ sidebarType }) => (
  <WrapSidebar activeColor={sidebarType}>
    <ButtonIcon icon={logoIcon} />
    <div>
      <ButtonIcon as={Link} to="/" icon={penIcon} />
      <ButtonIcon as={Link} to="twitters" icon={twitterIcon} />
      <ButtonIcon as={Link} to="articles" icon={bulbIcon} />
    </div>
    <ButtonIcon as={Link} to="/" icon={logoutIcon} />
  </WrapSidebar>
);

Sidebar.propTypes = {
  sidebarType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  sidebarType: 'notes',
};

export default Sidebar;
