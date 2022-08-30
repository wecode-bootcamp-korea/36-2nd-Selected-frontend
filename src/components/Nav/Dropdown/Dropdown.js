import React, { useState } from 'react';
import { dropDownList } from './DropdownList';
import SubMenu from './SubMenu/SubMenu';
import * as S from './Dropdown.Styled';

export default function Dropdown({ setToggle }) {
  const [clickedId, setClickedId] = useState(0);

  return (
    <S.DropMenu onMouseLeave={() => setToggle(false)}>
      <S.MenuStyle>
        {dropDownList.map(({ mainjobID, mainjob }) => (
          <S.CateStyle
            key={mainjobID}
            onMouseEnter={() => setClickedId(mainjobID)}
          >
            <S.LiteralStyle>{mainjob}</S.LiteralStyle>
          </S.CateStyle>
        ))}
        {dropDownList.map(({ mainjobID, subjob }) => {
          const reallyChecked = mainjobID === clickedId && true;
          return (
            <SubMenu
              key={mainjobID}
              subjob={subjob}
              reallyChecked={reallyChecked}
            />
          );
        })}
      </S.MenuStyle>
    </S.DropMenu>
  );
}
