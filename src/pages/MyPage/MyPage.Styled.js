import styled from 'styled-components';

const myPageBackGroundColor = '#f8f8f8';
const borderColor = '#bababa';
const selectedBlack = '#333333';

export const MyPage = styled.div`
  padding: 1rem 3rem;
  background-color: ${myPageBackGroundColor};
`;

export const MyPageHeader = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
  width: 100%;
  height: 100%;
  padding: 32px 0;
  font-weight: 500;
  font-size: 24px;
`;

export const MyPageHeaderTitle = styled.div``;

export const MyPageMain = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
`;

export const MyPageAside = styled.div`
  ${({ theme }) => theme.variables.flex('column', 'space-between', 'center')};

  width: 250px;
  background-color: white;
  border: 1px solid ${borderColor};
  border-radius: 3px;

  .profileImg {
    position: relative;

    width: 77px;
    height: 77px;
    border-radius: 50%;
  }
`;

export const ProfileUploadButton = styled.div`
  ${({ theme }) => theme.variables.flex()};
  position: relative;
  top: -30px;
  left: 30px;
  width: 32px;
  height: 32px;
  background-color: white;
  border-radius: 50%;
  color: grey;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
`;

export const MyPageAsideTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 18px;
`;

export const MyPageAsideDescription = styled.div`
  ${({ theme }) => theme.variables.flex()};
  font-size: ${({ size }) => (size ? size : '14px')};
  font-weight: 500;
  margin-bottom: 8px;
  color: ${({ color }) => (color ? color : '#767676')};
  svg {
    margin: 5px;
  }
`;

export const MyPageAsideTags = styled.button`
  text-align: left;
  background-color: #f2f4f7;
  width: 80%;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 700;
  color: ${selectedBlack};
`;

export const MyPageSection = styled.div``;

export const ApplicationBoard = styled.div``;

export const MyPageProfile = styled.div``;

export const MyPageBookMark = styled.div``;

export const MyPageResume = styled.div``;

export const MypageApplication = styled.div``;
