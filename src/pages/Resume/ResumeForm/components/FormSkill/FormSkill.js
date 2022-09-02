import { useState } from 'react';
import * as S from './FormSkill.Styled.js';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import { RiSearch2Line } from 'react-icons/ri';

export default function FormSkill() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [searchSkills, setSearchSkills] = useState([]);
  const [searchString, setSearchString] = useState('');
  const orderedSkills = SKILL_LIST.sort((a, b) => {
    const first = a.tag.toLowerCase();
    const second = b.tag.toLowerCase();
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
        if (x.tag.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
          return true;
        }
        return false;
      })
    );
  };

  const handleSelectSkill = tag => {
    if (selectedSkills.indexOf(tag) === -1) {
      return setSelectedSkills([...selectedSkills, tag]);
    }
  };

  const handleSearch = tag => {
    setSearchSkills([]);
    if (selectedSkills.indexOf(tag) === -1) {
      setSearchString('');
      return setSelectedSkills([...selectedSkills, tag]);
    }
  };

  return (
    <S.FormSkillContainer>
      <S.FormSkill>
        <S.SkillTitle>
          <p>많이 쓰는 스킬을 추가해보세요!</p>
        </S.SkillTitle>
        <S.SkillTags>
          {SKILL_LIST.map(({ id, tag }) => {
            return (
              <S.SkillTag key={id} onClick={tag => handleSelectSkill(tag)}>
                {tag}
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
              searchSkills.map(({ id, tag }) => {
                return (
                  <S.SearchSkill key={id}>
                    <S.SearchSkillButton onClick={tag => handleSearch(tag)}>
                      {tag}
                    </S.SearchSkillButton>
                  </S.SearchSkill>
                );
              })}
          </ul>
        </S.SearchSkills>
        <S.SelectedTags>
          {selectedSkills.map(skill => (
            <S.SkillTag key={skill} color="grey">
              {skill}
              <AiOutlineClose size="20" />
            </S.SkillTag>
          ))}
        </S.SelectedTags>
      </S.FormSearchContainer>
    </S.FormSkillContainer>
  );
}

const SKILL_LIST = [
  { id: 1, tag: 'Python' },
  { id: 2, tag: 'Spring Framework' },
  { id: 3, tag: 'AWS' },
  { id: 4, tag: 'Git' },
  { id: 5, tag: 'iOS' },
  { id: 6, tag: 'HTML' },
  { id: 7, tag: 'JavaScript' },
  { id: 8, tag: 'MySQL' },
  { id: 9, tag: 'SQL' },
  { id: 10, tag: 'Linux' },
  { id: 11, tag: 'Android' },
  { id: 12, tag: 'Kotlin' },
  { id: 13, tag: 'Swift' },
  { id: 14, tag: 'C / C ++' },
  { id: 15, tag: 'PHP' },
  { id: 16, tag: 'Docker' },
  { id: 17, tag: 'React' },
  { id: 18, tag: 'Github' },
  { id: 19, tag: 'JPA' },
  { id: 20, tag: 'C++' },
  { id: 21, tag: 'abc' },
  { id: 22, tag: 'abd' },
];
