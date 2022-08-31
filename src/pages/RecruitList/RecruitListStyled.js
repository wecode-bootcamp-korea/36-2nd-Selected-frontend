import styled from 'styled-components';

export const RecruitList = styled.div`
  margin: 0 auto;
  padding: 20px 0 80px;
  width: 80%;
`;
export const BookMark = styled.div`
  margin-bottom: 12px;
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
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
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
  border: 1px solid #00aead;
  color: #00aead;
  border-radius: 2px;
  background-color: #fff;
  display: inline-block;
  span {
    line-height: 19px;
  }
`;
export const ListSeoul = styled.div`
  font-weight: 400;
  color: #999;
  margin-top: 10px;
`;
export const ListMoney = styled.div`
  margin-top: 10px;
  color: #333;
  font-size: 16px;
  font-weight: 500;
`;
