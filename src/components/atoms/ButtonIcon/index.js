import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  border: none;
  background: url(${({ icon }) => icon}) no-repeat center;
  background-size: 40%;
  background-color: ${({ active }) => (active ? '#FFFFFF' : 'transparent')};
`;

export default ButtonIcon;
