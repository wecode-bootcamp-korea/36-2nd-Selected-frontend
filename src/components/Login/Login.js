import * as S from './Login.Styled';
import { KAKAO_AUTH_URL } from './OAuth';
import { AiOutlineClose } from 'react-icons/ai';

export default function Login({ setModal }) {
  return (
    <div>
      <S.SubModal
        onClick={() => {
          setModal(false);
        }}
      />
      <S.Modal>
        <S.Title>
          <S.Subtext>Selected</S.Subtext>
          <S.Close
            onClick={() => {
              setModal(false);
            }}
          >
            <AiOutlineClose size="30" color="#999" />
          </S.Close>
        </S.Title>

        <S.ModalMain>
          <S.Modalh1>
            직장인을 위한
            <br />
            커리어 플랫폼, 셀렉티드!
          </S.Modalh1>
          <S.Modalh2>
            커리어 성장과 행복을 위한 여정 <br /> 지금 셀렉티드에서 시작하세요.
          </S.Modalh2>

          <S.LoginBox>
            <S.KakaoBox href={KAKAO_AUTH_URL}>
              <S.Kakao />
            </S.KakaoBox>
          </S.LoginBox>
          <S.ButtonText>
            걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
            <br />
            회원가입 시 개인정보 처리방침과 이용약관을 확인하였으며, 동의합니다
          </S.ButtonText>
        </S.ModalMain>
      </S.Modal>
    </div>
  );
}
