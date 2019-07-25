import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/global';
import PageContext from 'context';

class MainTemplate extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = '') => {
    const pageTypes = ['notes', 'twitters', 'articles'];
    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = pageTypes.filter(page => pathname.includes(page));
    if (prevState.pageType !== currentPage) {
      this.setState({
        pageType: currentPage,
      });
    }
  };

  render() {
    const { children } = this.props;
    const { pageType } = this.state;

    return (
      <>
        <PageContext.Provider value={pageType}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PageContext.Provider>
      </>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.objectOf(PropTypes.string),
};

MainTemplate.defaultProps = {
  location: 'notes',
};

export default withRouter(MainTemplate);
