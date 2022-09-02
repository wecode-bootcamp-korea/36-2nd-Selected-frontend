import styled from 'styled-components';

export const NavHeaderSelect = styled.div`
  ${({ theme }) => theme.variables.flex('row')}
  margin: 0 px;
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize};
  cursor: pointer;
  user-select: none;
`;

export const NavHeaderIconContainer = styled.div`
  ${({ theme }) => theme.variables.flex('row')}
  width: 20px;
  height: 20px;
  margin-left: 16px;
  border: 1px solid #e1e2e3;
  border-radius: 50%;

  svg {
    padding: 1px;
  }
`;

export const CareerCategoryDropDown = styled.ul`
  position: absolute;
  top: 60px;
  max-width: 190px;
  min-width: 170px;
  border: 1px solid #e1e2e3;
  background-color: white;
  z-index: 10;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
  padding: 12px 0;
  overflow-y: scroll;
  user-select: none;
`;

export const DropDownLi = styled.li`
  font-size: 14px;
  line-height: 16.8px;
  ${({ name, selectedCategory }) =>
    selectedCategory.mainJobId === name
      ? 'color : #36f; font-weight : 500;'
      : 'color : #333333'};
  padding: 8px 0 8px 20px;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
  }

  &:focus {
    background-color: #1e1e1e;
  }
`;

export const CategoryModal = styled.div`
  width: 760px;
  position: absolute;
  top: 60px;
  border: 1px solid #e1e2e3;
  background-color: white;
  z-index: 10;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 15%);

  user-select: none;
`;

export const CategoryModalHeader = styled.p`
  color: #666;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;
  margin-bottom: 10px;
`;

export const CategoryModalTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 25px 25px 8px;
`;

export const CategoryTags = styled.div``;

export const TagButton = styled.button`
  padding: 10px 16px;
  margin: 8px 5px;
  background-color: ${({ hasSelected }) => (hasSelected ? 'white' : '#f2f4f7')};
  border: none;
  border-radius: 20px;
  cursor: pointer;

  ${({ name, selectedCategory }) => {
    return selectedCategory.subJobId === name
      ? 'color : #36f; font-weight : 500;  background-color: #fff; border: 1px solid #36f; font-weight: 600;'
      : 'color : #333333';
  }};
`;

export const SubmitBar = styled.div`
  width: 100%;
  background-color: white;
  padding: 16px;
  text-align: right;
  border-top: 1px solid #ececec;
  background-color: #fff;
`;

export const TagSubmitButton = styled.button`
  height: 40px;
  font-size: 15px;
  color: #fff;
  background-color: #36f;
  border: none;
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  vertical-align: middle;
  min-width: 64px;
  padding: 0 27px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  border: none;
  background-color: none;
  cursor: pointer;
`;
