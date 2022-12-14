import styled from 'styled-components';
// import variables from '../../styles/variables';

export const footerMenu = styled.div`
  font-weight: ${props => props.font};
  font-size: 16px;
  padding-right: 50px;
`;

export const FooterInfo = styled.div`
  font-size: 12px;
  color: #767676;
  padding-top: 5px;
`;

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid lightgray;
  padding: 30px 0px 30px 0px;
  padding-left: 13%;
`;

export const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 72%;
  padding-top: 1%;
  margin: 0% 0% 5% 12%;
  border-top: 1px solid lightgray;
`;

export const SelectBox = styled.select`
  width: 290px;
  height: 38px;
  margin-top: 15px;
  border-radius: 10px;
`;
