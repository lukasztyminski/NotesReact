import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import withContext from 'hoc/withContext';

const Articles = ({ articles }) => {
  return (
    <GridTemplate pageType="articles">
      {articles.map(({ id, title, content, articleUrl, created }) => (
        <Card
          id={id}
          key={id}
          title={title}
          content={content}
          articleUrl={articleUrl}
          created={created}
        />
      ))}
    </GridTemplate>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    })
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = ({ articles }) => {
  return { articles };
};

export default connect(mapStateToProps)(withContext(Articles));
