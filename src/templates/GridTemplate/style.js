import styled from 'styled-components';

import ButtonIcon from 'components/atoms/ButtonIcon';
import Heading from 'components/atoms/Heading';

import Paragraph from 'components/atoms/Paragraph';

export const PageWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

export const PageHeader = styled.div`
  margin: 25px 0 50px;
`;

export const StyledHeading = styled(Heading)`
  margin: 25px 0 0;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

export const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.notes)};
  border-radius: 50%;
  position: fixed;
  z-index: 9999;
  right: 40px;
  bottom: 40px;
`;
