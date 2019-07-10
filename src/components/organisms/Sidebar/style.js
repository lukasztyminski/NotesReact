import styled from 'styled-components';

export const WrapSidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 153px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  transition: 0.3s;
  background: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.notes)};
`;

export const WrapMenuLink = styled.ul`
  margin: 0 0 50vh;
  padding: 0;
  list-style-type: none;
`;
