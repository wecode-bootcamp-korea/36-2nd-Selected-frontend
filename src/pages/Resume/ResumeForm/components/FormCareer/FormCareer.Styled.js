import styled from 'styled-components';
import variables from '../../../../../styles/variables';

const selectedBlue = ({ theme }) => theme.theme.selectedBlue;
const borderColor = '#bababa';
const borderColorLight = '#f1f1f1';
const backgroundColorHover = '#fbfbfb';

export const FormCareer = styled.div`
  ${variables.flex()};
  width: 100%;
  padding: 2rem 0;
  border-top: 1px solid ${borderColorLight};

  &:hover {
    background-color: ${backgroundColorHover};
  }
`;

export const CareerDate = styled.div`
  width: 30%;
  padding: 0 2rem;
  font-size: 14px;
`;

export const CareerDateInput = styled.input`
  text-align: center;
  font-weight: 500;

  &::placeholder {
    color: ${borderColor};
    font-size: 13px;
  }
`;

export const InputYear = styled.input`
  width: 36px;
  height: 20px;
  padding: 0;
  border: none;
  background: none;
`;

export const InputMonth = styled.input`
  width: 26px;
  height: 20px;
  padding: 0;
  border: none;
  background: none;
  margin-bottom: 1rem;

  &:hover {
    background-color: ${backgroundColorHover};
  }
`;

export const Inputs = styled.div`
  font-size: 12px;
`;

export const Description = styled.div`
  ${variables.flex('row', 'flex-start')};
  color: ${borderColor};
  font-weight: 400;
  font-size: 12px;
`;

export const DescriptionInput = styled.input`
  width: 14px;
  height: 14px;
  border-radius: 3px;
  border: 1px solid ${borderColor};
  appearance: none;

  &:checked {
    background: ${selectedBlue};
    appearance: auto;
    border: none;
  }
`;

export const CareerInfo = styled.div`
  ${variables.flex('column', 'flex-start', 'flex-start')};
  width: 70%;
  padding: 0 2rem;
  font-size: 14px;
`;

export const CareerInfoInput = styled.input`
  border: none;
  background: none;
  font-weight: 500;
  text-align: left;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${borderColor};
  }

  ${({ name }) =>
    name === 'company' &&
    `
      height: 1.8rem;
      margin-bottom: 1rem;
      font-size: 1.5rem;

      &::placeholder {
        font-size: 1.5rem;
      }
      `}
`;
