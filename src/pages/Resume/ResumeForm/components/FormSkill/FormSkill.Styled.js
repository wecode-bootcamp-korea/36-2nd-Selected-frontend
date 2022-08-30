import styled from 'styled-components';

const selectedBlue = ({ theme }) => theme.theme.selectedBlue;
const borderColor = '#bababa';
const borderColorLight = '#f1f1f1';

export const FormSkillContainer = styled.div`
  ${({ theme }) => theme.variables.flex('column')}
  width: 100%;
`;

export const FormSkill = styled.div`
  ${({ theme }) => theme.variables.flex('column')}
  width: 100%;
  padding: 20px 16px;
  background-color: #f5fcf8;
  border-top: 1px solid ${borderColorLight};
`;

export const SkillTitle = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between')}
  width:100%;
  margin-bottom: 16px;
`;

export const SkillTags = styled.div`
  ${({ theme }) => theme.variables.flex('row', ' flex-start')}
  flex-wrap : wrap;
`;

export const SkillTag = styled.div`
  ${({ theme }) => theme.variables.flex('row')}
  padding: 10px 16px;
  margin: 8px 5px;
  background-color: ${({ color }) =>
    color === 'grey' ? '#f3f5f8' : '#e4f4ec'};
  border: none;
  border-radius: 20px;
  cursor: pointer;

  svg {
    margin-left: 5px;
    color: ${borderColor};
  }
`;

export const FormSearchContainer = styled.div`
  width: 100%;
`;

export const SkillSearchInput = styled.input`
  width: 100%;
  height: 46px;
  margin-top: 32px;
  padding: 16px;
  border: 1px solid ${borderColor};
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  font-weight: 600;

  &:focus {
    border-color: ${selectedBlue};
    outline: none;
  }
`;

export const SearchIcon = styled.span`
  position: relative;

  svg {
    position: absolute;
    top: -2px;
    right: 20px;
    margin-left: 1px;
    color: grey;
  }
`;

export const SearchSkills = styled.div`
  display: ${({ searchString }) => (!searchString ? 'none' : 'block')};
  position: absolute;
  width: calc(100% - 96px);
  z-index: 10;
  background-color: white;
  border: 1px solid ${borderColor};
`;

export const SearchSkill = styled.li`
  width: 100%;
`;

export const SearchSkillButton = styled.button`
  background: none;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  width: 100%;
  text-align: left;
  cursor: pointer;

  &:focus {
    background-color: ${borderColor};
  }
`;

export const SelectedTags = styled.div`
  ${({ theme }) => theme.variables.flex('row', ' flex-start')}
  flex-wrap : wrap;
  width: 100%;
  padding: 16px 0;
`;
