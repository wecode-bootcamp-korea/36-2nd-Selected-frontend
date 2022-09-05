import styled from 'styled-components';

export const DropMenu = styled.div`
  height: 100%;
  position: fixed;
  top: 59px;
  display: flex;
  background-color: #fff;
  border-right: 0.8px solid #f3f5f8;
  border-left: 0.8px solid #f3f5f8;
  overflow-y: scroll;
`;

export const MenuStyle = styled.ul`
  text-align: center;
`;

export const CateStyle = styled.li`
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
`;

export const LiteralStyle = styled.a`
  display: flex;
  text-decoration: none;
  width: 200px;
  height: 40px;
  padding: 0 20px;
  align-items: center;
  cursor: porinter;
  color: ${({ theme }) => theme.theme.selectedBlack};
  &:hover {
    background-color: #f6f9fa;
    color: ${({ theme }) => theme.theme.selectedBlue};
  }
`;

export const SecondMenu = styled(DropMenu)`
  background-color: #f6f9fa;
`;

export const SubJobStyle = styled.li`
  font-size: 14px;
  font-weight: 200px;
`;
