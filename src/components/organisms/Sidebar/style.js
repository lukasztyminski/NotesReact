import styled from 'styled-components';

export const WrapSidebar = styled.div`
  width: 153px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.white)};
`;
