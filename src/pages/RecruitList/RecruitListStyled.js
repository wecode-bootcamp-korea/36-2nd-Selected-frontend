import styled from 'styled-components';

export const RecruitList = styled.div`
  margin: 5% auto;
  padding: 20px 0 80px;
  width: 74%;
`;
export const BookMark = styled.div`
  margin-bottom: 12px;
  ${({ isRecuruitList, navScroll }) => {
    if (isRecuruitList && navScroll > 250) {
      return `margin-top : 280px;`;
    }
    return `margin-top : 0;`;
  }};
`;

export const MarkButton = styled.button`
  display: flex;
  color: #36f;
  background-color: #fff;
  border: none;
  align-items: center;
  line-height: 24px;
`;
export const MarkText = styled.span`
  margin-left: 10px;
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  ${({ isDetail }) =>
    isDetail
      ? `
  font-size : 20px;
  color : #000;
  `
      : ``};
`;

export const ListLi = styled.li`
  width: 25%;
  padding: 10px;
  list-style: none;
  display: inline-block;
  vertical-align: top;
`;

export const ListLink = styled.a`
  width: 100%;
  cursor: pointer;
`;

export const Header = styled.header`
  padding-bottom: 75%;
  position: relative;
  background-size: cover;
  background-position: 50%;
  border-radius: 4px;
  background-image: url(${props => props.url});
`;

export const ListTextBox = styled.div`
  padding: 14px 0;
`;
export const ListText = styled.div`
  position: relative;
  color: #333;
  font-size: ${props => props.size};
  font-weight: 600;
  line-height: 1.2;
  max-height: 2.4em;
  overflow: hidden;
  text-align: left;
  word-break: break-word;
  margin-top: 5px;
`;
export const ListButton = styled.button`
  display: inline-block;
  margin-top: 4px;
  border: 1px solid #00aead;
  color: #00aead;
  border-radius: 2px;
  background-color: #fff;
  font-size: 5px;
`;

export const ListButtonSpan = styled.span`
  line-height: 15px;
  letter-spacing: -1px;
  padding: 0 0.4px;
`;
export const ListSeoul = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'center')};
  margin-top: 10px;
  width: 100%;
  color: #999;
  font-weight: 400;
  font-size: 14px;
`;

export const ListSeoulDiv = styled.div`
  width: 2.5px;
  height: 2.5px;
  border-radius: 1.25px;
  background-color: #999;
  margin: 0 3px;
`;

export const ListMoney = styled.div`
  margin-top: 10px;
  color: #333;
  font-size: 14px;
  font-weight: 500;
`;
