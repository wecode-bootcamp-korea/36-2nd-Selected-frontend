import { useEffect } from 'react';
import { REDIRECT_URI } from './OAuth';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { goToUrl } from '../../utills';
import { API } from '../../api';
const KakaoRedirectHandler = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get('code');
    const requestURL = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`;
    const requestHeaders = {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    };

    fetch(requestURL, requestHeaders)
      .then(response => response.json())
      .then(data => {
        const kakaoToken = data;
        const headers = {
          method: 'POST',
          headers: { Authorization: `Bearer ${JSON.stringify(kakaoToken)}` },
        };
        fetch(API.POST_LOGIN, headers)
          .then(response => response.json())
          .then(data => {
            localStorage.setItem('token', JSON.stringify(data));
            alert('환영합니다.');
            goToUrl(navigate, '/');
          });
      });
  }, [searchParams, navigate]);

  return <div>로그</div>;
};
export default KakaoRedirectHandler;
