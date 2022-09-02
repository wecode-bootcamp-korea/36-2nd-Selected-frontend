// TODO import React, { useState } from 'react';
import * as S from './Footer.Styled';

export default function Footer() {
  // TODO  const [test, setTest] = useState({
  //     select: '',
  //   });
  //   const handleInput = event => {
  //     const { name, value } = event.target;
  //     setTest({ ...test, [name]: value });
  //   };

  return (
    <>
      <S.MenuWrap>
        <S.footerMenu font="Bold">Selected</S.footerMenu>
        <S.footerMenu> 기업소개 </S.footerMenu>
        <S.footerMenu> 이용약관 </S.footerMenu>
        <S.footerMenu> 개인정보 처리방침 </S.footerMenu>
        <S.footerMenu> 고객센터 </S.footerMenu>
      </S.MenuWrap>
      <S.InfoWrap>
        <S.FooterInfo>
          (주)셀렉티드 (CTO:위코드 36기) | 코드특별시 코드구 코드로 300
          <S.FooterInfo>
            코드타워 935층 | 통신판매번호 : 0000-코드-0000
          </S.FooterInfo>
          <S.FooterInfo>
            유료직업소개사업등록번호 : (코드국) 제0000-0000000-00-0-00000호 |
            (국외) 서울남부-유-0000-0 | 사업자등록번호 : 000-00-00000 |
            00-000-0000 Ⓒ
          </S.FooterInfo>
          <S.FooterInfo />
          Selected, Inc.
        </S.FooterInfo>
        <S.SelectBox
        // TODO
        // name="select"
        //   onChange={handleInput}
        // defaultValue="한국 (한국어)"
        >
          <option>한국 (한국어)</option>
          <option>日本 (日本語)</option>
          <option>Worldwide (English)</option>
          <option>Singapore (English)</option>
        </S.SelectBox>
      </S.InfoWrap>
    </>
  );
}
