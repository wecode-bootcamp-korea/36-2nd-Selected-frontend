import React from 'react';
import * as S from './Nav.Styled';
import Dropdown from './Dropdown/Dropdown';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navList } from './NavList';

export default function Nav() {
  const [toggle, setToggle] = useState(false);

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
              <S.AStyle href={link}>{text}</S.AStyle>
            </S.ListStyle>
          ))}
        </S.Menu>
        <S.Aside>
          <S.Button>
            <S.SearchBar />
          </S.Button>
          <Link to="/login">
            <S.AsideButton>회원가입/로그인</S.AsideButton>
          </Link>
          <S.ListStyle>|</S.ListStyle>
          <S.ServiceButton>기업 서비스</S.ServiceButton>
        </S.Aside>
      </S.Title>
    </S.Container>
  );
}
