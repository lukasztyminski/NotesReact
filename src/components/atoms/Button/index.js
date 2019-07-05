import styled, { css } from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.notes};
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  font-size: 16px;
  border-radius: 50px;
  font-weight: 600;
  text-transform: uppercase;
  ${({ remove, theme }) =>
    remove &&
    css`
      width: 105px;
      height: 30px;
      font-size: 10px;
      background: ${theme.removeColor};
    `}
`;

export default Button;
