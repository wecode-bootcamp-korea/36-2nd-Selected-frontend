import React from 'react';
import * as S from './Nav.Styled';
import Login from '../Login/Login';
import Dropdown from './Dropdown/Dropdown';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { navList } from './NavList';
import { goToUrl } from '../../utills';

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const insertedToken = localStorage.getItem('token');
  const logout = () => {
    localStorage.clear();
    window.location.replace('');
    alert('로그아웃 되었습니다');
  };

  return (
    <S.Container>
      <S.Title>
        <S.Button onMouseEnter={() => setToggle(true)}>
          <S.LeftMenu />
        </S.Button>
        {toggle && <Dropdown setToggle={setToggle} />}
        <S.Button>
          <Link to="/">
            <S.Logo />
          </Link>
        </S.Button>
        <S.Menu>
          {navList.map(({ id, link, text }) => (
            <S.ListStyle key={id}>
              <S.AStyle onClick={() => goToUrl(navigate, link)}>
                {text}
              </S.AStyle>
            </S.ListStyle>
          ))}
        </S.Menu>
        <S.Aside>
          <S.Button>
            <S.SearchBar />
          </S.Button>
          {insertedToken ? (
            <S.AsideButton onClick={logout}> 로그아웃</S.AsideButton>
          ) : (
            <S.AsideButton
              onClick={() => {
                setModal(true);
              }}
            >
              회원가입/로그인
            </S.AsideButton>
          )}
          <S.ListStyle>|</S.ListStyle>
          <S.ServiceButton>기업 서비스</S.ServiceButton>
        </S.Aside>
      </S.Title>
      {modal && <Login setModal={setModal} />}
    </S.Container>
  );
}
