import { useState } from 'react';
import * as S from './FormSkill.Styled.js';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import { RiSearch2Line } from 'react-icons/ri';
import { useRecoilState } from 'recoil';
import { addSkillDataState } from '../../../../../atom.js';

export default function FormSkill() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [searchSkills, setSearchSkills] = useState([]);
  const [searchString, setSearchString] = useState('');
  const orderedSkills = SKILL_LIST.sort((a, b) => {
    const first = a.skillName.toLowerCase();
    const second = b.skillName.toLowerCase();
    if (first > second) {
      return 1;
    }
    if (first < second) {
      return -1;
    }
    return 0;
  });

  const handleChangeSearch = e => {
    const { value } = e.target;
    setSearchString(value);
    setSearchSkills(
      orderedSkills.filter(x => {
        if (x.skillName.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
          return true;
        }
        return false;
      })
    );
  };

  const handleSelectSkill = (e, { skillId, skillName }) => {
    if (selectedSkills.indexOf(skillName) === -1) {
      setSelectedSkills([...selectedSkills, skillName]);
      setAddSkillData([...addSkillData, { skillId, skillName }]);
    }
  };

  const handleSearch = (e, { skillId, skillName }) => {
    setSearchSkills([]);
    if (selectedSkills.indexOf(skillName) === -1) {
      setSearchString('');
      setSelectedSkills([...selectedSkills, skillName]);
      setAddSkillData([...addSkillData, { skillId, skillName }]);
    }
  };

  const [addSkillData, setAddSkillData] = useRecoilState(addSkillDataState);

  return (
    <S.FormSkillContainer>
      <S.FormSkill>
        <S.SkillTitle>
          <p>많이 쓰는 스킬을 추가해보세요!</p>
        </S.SkillTitle>
        <S.SkillTags>
          {SKILL_LIST.map(({ skillId, skillName }) => {
            return (
              <S.SkillTag
                key={skillId}
                onClick={e => handleSelectSkill(e, { skillId, skillName })}
              >
                {skillName}
                <AiOutlinePlus size="20" />
              </S.SkillTag>
            );
          })}
        </S.SkillTags>
      </S.FormSkill>
      <S.FormSearchContainer>
        <S.SkillSearchInput
          placeholder="보유 스킬을 검색해주세요."
          value={searchString}
          onChange={handleChangeSearch}
        />
        <S.SearchIcon>
          <div className="wall" />
          <RiSearch2Line size="20" />
        </S.SearchIcon>
        <S.SearchSkills searchString={searchSkills.length > 0 && searchString}>
          <ul>
            {searchSkills.length > 0 &&
              searchSkills.map(({ skillId, skillName }) => {
                return (
                  <S.SearchSkill key={skillId}>
                    <S.SearchSkillButton
                      onClick={e => handleSearch(e, { skillId, skillName })}
                    >
                      {skillName}
                    </S.SearchSkillButton>
                  </S.SearchSkill>
                );
              })}
          </ul>
        </S.SearchSkills>
        <S.SelectedTags>
          {selectedSkills.map(skillName => (
            <S.SkillTag key={skillName} color="grey">
              {skillName}
              <AiOutlineClose size="20" />
            </S.SkillTag>
          ))}
        </S.SelectedTags>
      </S.FormSearchContainer>
    </S.FormSkillContainer>
  );
}

const SKILL_LIST = [
  { skillId: 1, skillName: 'Python' },
  { skillId: 2, skillName: 'Spring Framework' },
  { skillId: 3, skillName: 'AWS' },
  { skillId: 4, skillName: 'Git' },
  { skillId: 5, skillName: 'iOS' },
  { skillId: 6, skillName: 'HTML' },
  { skillId: 7, skillName: 'JavaScript' },
  { skillId: 8, skillName: 'MySQL' },
  { skillId: 9, skillName: 'SQL' },
  { skillId: 10, skillName: 'Linux' },
  { skillId: 11, skillName: 'Android' },
  { skillId: 12, skillName: 'Kotlin' },
  { skillId: 13, skillName: 'Swift' },
  { skillId: 14, skillName: 'C / C ++' },
  { skillId: 15, skillName: 'PHP' },
  { skillId: 16, skillName: 'Docker' },
  { skillId: 17, skillName: 'React' },
  { skillId: 18, skillName: 'Github' },
  { skillId: 19, skillName: 'JPA' },
  { skillId: 20, skillName: 'C++' },
  { skillId: 21, skillName: 'abc' },
  { skillId: 22, skillName: 'abd' },
];
