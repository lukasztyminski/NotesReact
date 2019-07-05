import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';

import {
  StyledWrapper,
  InnerWrapper,
  StyledHeading,
  DateInfo,
  StyledAvatar,
  StyledLinkButton,
} from './style';

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Hello Łukasz</StyledHeading>
      <DateInfo>3 days</DateInfo>
      {cardType === 'twitters' && <StyledAvatar src="https://avatars.io/default_128.jpg" />}
      {cardType === 'articles' && (
        <StyledLinkButton target="_blank" href="https://www.facebook.com/tyminskilukasz" />
      )}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem Quis Lorem laborum deserunt reprehenderit laboris deserunt laborum irure elit dolore
        tempor. Ipsum inc et ea elit quis. Commodo officia et amet sunt adipisicing consequat dolor.
      </Paragraph>
      <Button remove>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Card.defaultProps = {
  cardType: 'notes',
};

export default Card;
