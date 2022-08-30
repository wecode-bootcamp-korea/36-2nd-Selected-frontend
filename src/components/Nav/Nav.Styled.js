import styled from 'styled-components';
import variables from '../../styles/variables';
import menuBar from '../../assets/Nav/MenuBar.png';
import logo from '../../assets/Nav/logo.png';
import searchBar from '../../assets/Nav/search.png';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  flex-direction: row;
  margin: 0;
  padding: 0;
  top: 0;
  box-shadow: ${({ theme }) => theme.selectedBoxShadow};
  position: fixed;
  background-color: #fff;
  list-style-type: none;
`;

export const Title = styled.nav`
  display: flex;
  margin: 0 auto;
  height: 50px;
  width: 75%;
  font-size: 14px;
  font-weight: 600;
  ${variables.flex(' ', 'space-between')};
`;

export const Button = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
  padding: 0;
  margin-right: 14px;
`;

export const LeftMenu = styled.img.attrs({
  src: `${menuBar}`,
})`
  width: 23px;
  height: 20px;
  ${variables.flex()};
`;

export const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  height: 20px;
  ${variables.flex()};
`;

export const Menu = styled.ul`
  text-align: center;
  margin: 0 auto;
`;

export const ListStyle = styled.li`
  float: left;
  padding: 15px;
`;

export const AsideButton = styled(Button)`
  margin: 0;
  color: ${({ theme }) => theme.theme.selectedBlack};
  text-decoration: none;
`;

export const ServiceButton = styled(Button)`
  border: 1px solid #e1e2e3;
  line-height: 30px;
  height: 30px;
  font-size: 13px;
  color: #666;
  border-radius: 15px;
  padding: 0 10px;
  font-weight: 400;
`;

export const AStyle = styled.a`
  text-decoration: none;
  color: ${props => props.theme.theme.selectedBlack};
`;

export const Aside = styled.aside`
  padding: 14px 0;
  height: 100%;
  ${variables.flex()}
`;

export const SearchBar = styled.img.attrs({
  src: `${searchBar}`,
})`
  width: 14px;
  height: 14px;
  bottom: 0;
`;
