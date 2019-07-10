import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { match } = this.props;
    const { pageType } = this.state;
    switch (match.path) {
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      default:
        pageType();
    }
  }

  render() {
    const { match } = this.props;
    const { pageType } = this.state;

    return (
      <>
        <DetailsTemplate pageType={pageType}>
          <p>{`is twitter: ${match.path === routes.twitter}`} </p>
          <p>{`is note: ${match.path === routes.note}`} </p>
          <p>{`is article: ${match.path === routes.article}`} </p>
        </DetailsTemplate>
      </>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default DetailsPage;
