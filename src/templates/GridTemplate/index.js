import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading';
import Input from 'components/atoms/Input';
import Paragraph from 'components/atoms/Paragraph';
import UserPageTemplate from 'templates/UserPageTemplate';
import { PageWrapper, GridWrapper, PageHeader } from './style';

const StyledHeading = styled(Heading)`
  margin: 25px 0 0;
  &::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const GridTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <PageWrapper>
      <PageHeader>
        <Input placeholder="Search" search />
        <StyledHeading big>{pageType}</StyledHeading>
        <StyledParagraph>6 notes</StyledParagraph>
      </PageHeader>
      <GridWrapper>{children}</GridWrapper>
    </PageWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageType: 'notes',
};

export default GridTemplate;
