import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';
import { H2 } from 'components/atoms/Heading';
import { DateInfo, StyledAvatar, StyledLinkButton } from 'components/molecules/Card/style';
import Button from 'components/atoms/Button';
import Paragraph from 'components/atoms/Paragraph';
import withContext from 'hoc/withContext';
import { DetailsWrap } from './style';

const DetailsTemplate = ({ pageContext, title, created, content, articleUrl, twitterName }) => {
  return (
    <>
      <UserPageTemplate>
        <DetailsWrap>
          <H2 big>{title}</H2>
          <DateInfo>{created}</DateInfo>
          {pageContext === 'twitters' && (
            <StyledAvatar
              style={{ position: 'absolute' }}
              src={`https://avatars.io/twitter/${twitterName}`}
            />
          )}
          {pageContext === 'articles' && (
            <StyledLinkButton style={{ position: 'absolute' }} target="_blank" href={articleUrl} />
          )}
          <Paragraph style={{ maxWidth: 900 }}>{content}</Paragraph>
          <Link to="/">
            <Button pageType={pageContext}>Save/close</Button>
          </Link>
        </DetailsWrap>
      </UserPageTemplate>
    </>
  );
};

DetailsTemplate.propTypes = {
  pageContext: PropTypes.string.isRequired,
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  created: '',
  content: '',
  articleUrl: '',
  twitterName: '',
};

export default withContext(DetailsTemplate);
