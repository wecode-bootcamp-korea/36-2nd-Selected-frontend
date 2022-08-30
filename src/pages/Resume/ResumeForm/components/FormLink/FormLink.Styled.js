import styled from 'styled-components';

const borderColorLight = '#f1f1f1';
const backgroundColorHover = '#fbfbfb';

export const FormLink = styled.div`
  ${({ theme }) => theme.variables.flex()}
  width: 100%;
  padding: 2rem 0;
  border-top: 1px solid ${borderColorLight};

  &:hover {
    background-color: ${backgroundColorHover};
  }
`;

export const LinkInput = styled.input`
  display: block;
  width: 100%;
  padding: 0 20px;
  border: none;
  background: none;
  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #aaaaaa;
  }
`;
