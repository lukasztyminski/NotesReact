import styled, { css } from 'styled-components';

import Paragraph from 'components/atoms/Paragraph';
import Heading from 'components/atoms/Heading';
import linkIcon from 'assets/icons/link.svg';

export const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  overflow: hidden;
  border-radius: 10px;
  min-height: 380px;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

export const InnerWrapper = styled.div`
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

export const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

export const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  position: absolute;
  right: 25px;
  top: 25px;
  border-radius: 50px;
`;

export const StyledLinkButton = styled.a`
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
