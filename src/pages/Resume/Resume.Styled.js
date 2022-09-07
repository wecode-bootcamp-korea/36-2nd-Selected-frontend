import styled from 'styled-components';
import variables from '../../styles/variables';

const selectedBlue = ({ theme }) => theme.theme.selectedBlue;
const selectedBlack = ({ theme }) => theme.theme.selectedBlack;
const borderColor = '#bababa';

export const ResumeBody = styled.div`
  ${variables.flex('row', 'center', 'flex-start')};
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8fa;
`;

export const ResumeContainer = styled.div`
  ${variables.flex()}
  flex-wrap: wrap;
  max-width: 130rem;
  margin-top: 32px;
  padding: 64px;
  background-color: #f8f8fa;
`;

export const Header = styled.div`
  ${variables.flex('row', 'space-between')}
  width: 100%;
  max-width: 1000px;
  padding: 1rem 0;
  font-weight: 600;
`;

export const HeaderTitle = styled.div``;

export const HeaderDescription = styled.div`
  ${variables.flex()};
  color: ${selectedBlue};

  svg {
    margin-left: 0.5rem;
  }
`;

export const ResumeListContainer = styled.div`
  ${variables.flex('center', 'flex-start')}
  max-width: 1100px;
  flex-wrap: wrap;
`;

export const Resume = styled.div`
  ${variables.flex('column', 'space-around', 'space-between')};
  width: 12rem;
  height: 10rem;
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.theme.white};
  box-shadow: ${({ theme }) => theme.theme.selectedBoxShadow};
  cursor: pointer;
`;

export const ResumeMakeBox = styled(Resume)`
  ${variables.flex('column')};
  color: ${selectedBlue};
  font-weight: 600;

  label {
    cursor: pointer;
  }
`;

export const ResumeMakeBoxIcon = styled.div`
  ${variables.flex()};
  width: 4.5rem;
  height: 4.5rem;
  margin-bottom: 1rem;
  border-radius: 50%;
  background-color: ${({ color }) => {
    if (color === 'blue') {
      return selectedBlue;
    } else if (color === 'grey') {
      return '#e1e2e3';
    }
  }};

  color: ${({ color }) => {
    if (color === 'blue') {
      return 'white';
    } else if (color === 'grey') {
      return '#666';
    }
  }};
`;

export const ResumeInfo = styled.div`
  ${variables.flex()};
  padding-top: 0.25rem;
`;

export const ResumeInfoButton = styled.button`
  ${props => props.name === 'career' && (({ theme }) => theme.variables.flex())}
  margin: 0 0.2rem;
  padding: 0.3rem;
  border: none;
  border-radius: 3px;
  background-color: #eefaf9;
  color: ${({ name }) => (name === 'matchUp' ? '#36f' : '#08ba9c')};
  font-size: 11px;
  font-weight: 700;

  svg {
    margin-left: 0.25rem;
  }
`;

export const ResumeTitle = styled.div`
  ${variables.flex('column')};
  padding: 0 2rem;
  font-weight: bold;
  opacity: ${({ hasCompleted }) => (hasCompleted ? '1' : '0.5')};
`;

export const ResumeTitleTextBox = styled.div`
  color: ${({ title }) => (title ? 'black' : borderColor)};
  width: 100%;
  margin: 0.3rem;
  text-align: left;
`;

export const ResumeStatus = styled.div`
  ${variables.flex('row', 'space-around', 'center')};
  height: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: bold;
  padding: 1rem;
  color: ${({ hasCompleted }) => (hasCompleted ? selectedBlack : 'grey')};
`;

export const ResumeStatusLang = styled.div`
  ${variables.flex()};
  padding: 0.25rem;
  font-size: 0.5rem;
  border: 1px solid
    ${({ hasCompleted }) => (hasCompleted ? selectedBlack : 'grey')};
  border-radius: 3px;
`;

export const ResumeStatusInfo = styled.span`
  font-size: 0.8rem;
  text-align: left;
`;
