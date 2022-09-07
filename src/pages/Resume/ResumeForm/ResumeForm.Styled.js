import styled from 'styled-components';
import variables from '../../../styles/variables';

const selectedBlue = ({ theme }) => theme.theme.selectedBlue;
const borderColor = '#bababa';

export const ResumeForm = styled.div`
  ${variables.flex('column')}
  margin : 0 auto;
  margin-top: 32px;
  padding: 64px;
  width: 74%;
`;

export const ResumeTitle = styled.div`
  width: 100%;
  padding-top: 32px;
`;

export const ResumeTitleInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #aaaaaa;
  }

  ${({ isTitle }) =>
    isTitle
      ? `height: 10rem;
    font-size: 2rem;
    font-weight: 600;`
      : ` height: 2rem;
    font-size: 1rem;`}
`;

export const FormBody = styled.div`
  width: 100%;
`;

export const FormDescription = styled.div`
  padding-top: 6rem;
  font-size: 14px;
  font-weight: 500;
`;

export const Title = styled.div`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${borderColor};
`;

export const Description = styled.p`
  margin-top: 0.5rem;
  padding: 0.5rem 0.5rem;
  background-color: #f3f9fe;
  color: grey;
  line-height: 1.6;
  font-size: 11px;
`;

export const Input = styled.input`
  width: 100%;
  padding-top: 2rem;
  border: none;
  font-weight: 500;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
  }
`;

export const FormAddition = styled.button`
  padding: 30px 0;
  background: none;
  border: none;
  color: ${selectedBlue};
  font-weight: 600;
  font-size: 16px;

  &:enabled {
    cursor: pointer;
  }
`;

export const SubmitFormButton = styled.button`
  width: 180px;
  height: 50px;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
  background-color: #3366ff;
  border: none;
  border-radius: 15px;
  margin-top: 32px;
  cursor: pointer;

  &:hover {
    background-color: #33ff;
  }
`;
