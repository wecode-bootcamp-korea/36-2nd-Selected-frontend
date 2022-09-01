import * as S from './MyPage.Styled.js';
import { AiFillCamera, AiOutlineExclamationCircle } from 'react-icons/ai';

export default function MyPage() {
  return (
    <S.MyPage>
      <S.MyPageHeader>
        <S.MyPageHeaderTitle>MY 원티드</S.MyPageHeaderTitle>
      </S.MyPageHeader>
      <S.MyPageMain>
        <S.MyPageAside>
          <img
            className="profileImg"
            src="https://lh3.googleusercontent.com/a/AItbvmmk7aZCoW31s6TzmNlR6hYHcXgJq34IqBzFEKhj=s96-c"
            alt="profileImg"
          />
          <S.ProfileUploadButton>
            <AiFillCamera size="18" />
          </S.ProfileUploadButton>
          <S.MyPageAsideTitle>임채동</S.MyPageAsideTitle>
          <S.MyPageAsideDescription>
            chaedong.im.dev@gmail.com
          </S.MyPageAsideDescription>
          <S.MyPageAsideDescription>010-0000-0000</S.MyPageAsideDescription>
          <S.MyPageAsideDescription color="#FF9100" size="12px">
            <AiOutlineExclamationCircle size="15" />
            휴대폰 번호 인증 필요
          </S.MyPageAsideDescription>
          <S.MyPageAsideTags>관심태그</S.MyPageAsideTags>
          포인트, 관심있음, 열람, 받은 제안, 계정 설정
        </S.MyPageAside>
        <S.MyPageSection>
          <S.ApplicationBoard>
            지원완료, 이력서 열람, 최종 합격, 불합격
          </S.ApplicationBoard>
          <S.MyPageProfile>
            프로필, 그래프, 이력서를 자주 업데이트 할 수록 내 다음 연봉도
            높아집니다!
          </S.MyPageProfile>
          <S.MyPageBookMark>토스사진, 토스</S.MyPageBookMark>
          <S.MyPageResume>기본 이력서...</S.MyPageResume>
          <S.MypageApplication />
        </S.MyPageSection>
      </S.MyPageMain>
    </S.MyPage>
  );
}
