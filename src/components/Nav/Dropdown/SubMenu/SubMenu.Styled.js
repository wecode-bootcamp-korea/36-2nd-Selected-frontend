import styled from 'styled-components';

export const SecondMenu = styled.div`
  height: 100%;
  position: fixed;
  top: 49px;
  left: 379px;
  background-color: #f6f9fa;
  border-right: 0.8px solid #f3f5f8;
  border-left: 0.8px solid #f3f5f8;
`;

export const SecondStyle = styled.ul`
  text-align: center;
  display: flex;
  background-color: #f6f9fa;
`;

export const SecondList = styled.li`
  display: flex;
  font-size: 14px;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  background-color: #f6f9fa;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const SecondA = styled.a`
  display: flex;
  text-decoration: none;
  width: 200px;
  height: 40px;
  padding: 0 20px;
  align-items: center;
  background-color: #f6f9fa;
  font-weight: 350;
  color: ${props => props.theme.theme.selectedBlack};
  &:hover {
    color: ${props => props.theme.theme.selectedBlue};
  }
`;
