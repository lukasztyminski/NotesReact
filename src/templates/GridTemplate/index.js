import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input';
import UserPageTemplate from 'templates/UserPageTemplate';
import withContext from 'hoc/withContext';
import plusIcon from 'assets/icons/plus.svg';
import NewItemBar from 'components/organisms/NewItemBar';
import {
  PageWrapper,
  GridWrapper,
  PageHeader,
  StyledHeading,
  StyledParagraph,
  StyledButtonIcon,
} from './style';

class GridTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
  };

  toggleNewItemBar = () => {
    this.setState(prevState => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));
  };

  render() {
    const { children, pageContext } = this.props;
    const { isNewItemBarVisible } = this.state;
    return (
      <UserPageTemplate>
        <PageWrapper>
          <PageHeader>
            <Input placeholder="Search" search />
            <StyledHeading big>{pageContext}</StyledHeading>
            <StyledParagraph>6 {pageContext}</StyledParagraph>
          </PageHeader>
          <GridWrapper>{children}</GridWrapper>
          <StyledButtonIcon
            onClick={this.toggleNewItemBar}
            activeColor={pageContext}
            icon={plusIcon}
          />
          <NewItemBar handleClose={this.toggleNewItemBar} isVisible={isNewItemBarVisible} />
        </PageWrapper>
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
  pageContext: PropTypes.string,
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
