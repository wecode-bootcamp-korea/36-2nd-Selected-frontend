import styled from 'styled-components';
import kakaoImg from '../../assets/Login/kakao_login_medium_wide.png';

export const SubModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  z-index: 2;
`;
export const Modal = styled.div`
  position: absolute;
  width: 28%;
  max-width: 600px;
  min-width: 500px;
  height: 550px;
  max-height: 700px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 5px;
  z-index: 3;
`;
export const Title = styled.div`
  position: relative;
  width: 100%;
  height: 54px;
  padding: 16px 20px;
  text-align: center;
`;
export const Subtext = styled.h1`
  padding-top: 12px;
  font-size: 25px;
  font-weight: 900;
`;
export const Close = styled.button`
  position: absolute;
  top: 45%;
  right: 0;
  padding: 5px;
  transform: translateY(-50%);
  border: none;
  background-color: #fff;
  line-height: 0;
  cursor: pointer;
`;
export const ModalMain = styled.div`
  position: relative;
  width: 100%;
  height: 93%;
  padding: 32px;
  text-align: center;
`;
export const Modalh1 = styled.h1`
  margin-bottom: 22px;
  color: #333;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.7;
`;
export const Modalh2 = styled.h2`
  margin-bottom: 50px;
  color: #666;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
`;
export const LoginBox = styled.div`
  width: 100%;
  margin-bottom: 35px;
`;
export const KakaoBox = styled.a`
  width: 100%;
`;
export const Kakao = styled.img.attrs({
  alt: `카카오이미지`,
  src: `${kakaoImg}`,
})`
  cursor: pointer;
  width: 100%;
  max-width: 500px;
`;

export const ButtonText = styled.p`
  color: #999;
  font-size: 13px;
  line-height: 1.5;
`;
