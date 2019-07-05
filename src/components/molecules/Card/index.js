import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import linkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  overflow: hidden;
  border-radius: 10px;
  min-height: 380px;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.white)};
  &:first-child {
    z-index: 99;
  }
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  position: absolute;
  right: 25px;
  top: 25px;
  border-radius: 50px;
`;

const StyledLinkButton = styled.a`
  width: 47px;
  height: 47px;
  display: block;
  border-radius: 50px;
  background: ${({ theme }) => theme.white} url(${linkIcon}) no-repeat center;
  background-size: 60%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translate3d(0, -50%, 0);
`;

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
