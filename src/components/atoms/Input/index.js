import styled, { css } from 'styled-components';
import magnifier from 'assets/icons/magnifier.svg';

const Input = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  background: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 50px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  ${({ search, theme }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: ${theme.fontSize.xs};
      background: ${theme.grey100} url(${magnifier}) no-repeat 15px 50%;
      background-size: 15px;
    `}
`;

export default Input;
