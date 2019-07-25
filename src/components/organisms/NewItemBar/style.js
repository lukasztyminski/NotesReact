import styled, { css } from 'styled-components';
import { flexColumnStart } from 'theme/mixins';
import Input from 'components/atoms/Input';

export const StyledInput = styled(Input)`
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledError = styled.div`
  color: red;
`;

export const StyledTextarea = styled(StyledInput)`
  height: 300px;
  resize: none;
  border-radius: 15px;
`;

export const StyledWrap = styled.div`
  ${flexColumnStart};
  z-index: 999;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 30vw;
  padding: 5vw;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
  transform: translate3d(100%, 0, 0);
  transition: 0.3s;
  border-left: 10px solid
    ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.notes)};
  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translate3d(0, 0, 0);
      box-shadow: 10px 8px 11px 5px #000;
    `}
`;
