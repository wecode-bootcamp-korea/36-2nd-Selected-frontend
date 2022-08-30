import React from 'react';
import * as S from './SubMenu.Styled';

export default function SubMenu({ subjob, reallyChecked }) {
  return (
    <S.SecondMenu>
      <S.SecondStyle>
        <S.SecondList>
          {reallyChecked &&
            subjob.map(({ id, category }) => {
              return <S.SecondA key={id}>{category}</S.SecondA>;
            })}
        </S.SecondList>
      </S.SecondStyle>
    </S.SecondMenu>
  );
}
