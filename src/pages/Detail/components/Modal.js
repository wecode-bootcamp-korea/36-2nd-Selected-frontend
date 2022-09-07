import React from 'react';
import * as S from './Modal.Styled';

export default function Modal() {
  return (
    <S.ModalContainer>
      <S.ModalHeader>
        <S.ModalTitle>채용보상금</S.ModalTitle>
        <S.ModalList>
          <S.ModalTag>
            <S.ModalSubTitle>추천인</S.ModalSubTitle>
            <p>500,000원</p>
          </S.ModalTag>
          <S.ModalTag>
            <S.ModalSubTitle>지원자</S.ModalSubTitle>
            <p>500,000원</p>
          </S.ModalTag>
        </S.ModalList>
        <S.ApplyBtnContainer>
          <S.ApplyBtn>지원하기</S.ApplyBtn>
        </S.ApplyBtnContainer>
      </S.ModalHeader>
    </S.ModalContainer>
  );
}
