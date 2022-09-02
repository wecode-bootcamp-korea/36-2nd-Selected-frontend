import * as S from './NavHeaderSelect.Styled.js';
import { AiOutlineDown } from 'react-icons/ai';
import { MAIN_JOB_CATEGORY, SUB_JOB_CATEGORY } from '../CareerNav.Data.js';

export function NavHeaderSelectMain({
  isOpened,
  setIsOpened,
  fontSize,
  selectedCategory,
  setSelectedCategory,
}) {
  const handleClickCategory = e => {
    const mainJobId = Number(e.target.getAttribute('name'));
    const mainJobName = MAIN_JOB_CATEGORY[mainJobId].mainJobName;
    const subJobId = 0;
    const subJobName = SUB_JOB_CATEGORY[mainJobId][subJobId].subJobName;
    setSelectedCategory({
      mainJobId,
      mainJobName,
      subJobId,
      subJobName,
    });
  };
  return (
    <>
      <S.NavHeaderSelect
        fontSize={fontSize}
        onClick={() => setIsOpened({ main: !isOpened.main, sub: false })}
      >
        {selectedCategory.mainJobName}
        <S.NavHeaderIconContainer>
          <AiOutlineDown size="12" />
        </S.NavHeaderIconContainer>
      </S.NavHeaderSelect>
      {isOpened.main && (
        <S.CareerCategoryDropDown>
          {MAIN_JOB_CATEGORY.map(({ mainJobId, mainJobName }) => {
            return (
              <S.DropDownLi
                key={mainJobId}
                name={mainJobId}
                selectedCategory={selectedCategory}
                onClick={handleClickCategory}
              >
                {mainJobName}
              </S.DropDownLi>
            );
          })}
        </S.CareerCategoryDropDown>
      )}
    </>
  );
}

export function NavHeaderSelectSub({
  isOpened,
  setIsOpened,
  fontSize,
  selectedCategory,
  setSelectedCategory,
}) {
  const handleClickSubJob = e => {
    const subJobId = Number(e.target.getAttribute('name'));
    const subJobName =
      SUB_JOB_CATEGORY[selectedCategory.mainJobId][subJobId].subJobName;
    setSelectedCategory({
      ...selectedCategory,
      subJobId,
      subJobName,
    });
  };

  return (
    <>
      <S.NavHeaderSelect
        fontSize={fontSize}
        onClick={() => setIsOpened({ main: false, sub: !isOpened.sub })}
      >
        {selectedCategory.subJobName}
        <S.NavHeaderIconContainer>
          <AiOutlineDown size="12" />
        </S.NavHeaderIconContainer>
      </S.NavHeaderSelect>

      {isOpened.sub && (
        <S.CategoryModal>
          <S.CategoryModalTagsContainer>
            <S.CategoryModalHeader>직무를 선택해 주세요.</S.CategoryModalHeader>
            <S.CategoryTags>
              {SUB_JOB_CATEGORY[selectedCategory.mainJobId].map(
                ({ subJobId, subJobName }) => (
                  <S.TagButton
                    key={subJobId}
                    name={subJobId}
                    selectedCategory={selectedCategory}
                    onClick={handleClickSubJob}
                  >
                    {subJobName}
                  </S.TagButton>
                )
              )}
            </S.CategoryTags>
          </S.CategoryModalTagsContainer>
          <S.SubmitBar>
            <S.TagSubmitButton onClick={() => setIsOpened(false)}>
              선택 완료 하기
            </S.TagSubmitButton>
          </S.SubmitBar>
        </S.CategoryModal>
      )}
    </>
  );
}
