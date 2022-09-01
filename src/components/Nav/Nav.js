import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Nav() {
  return (
    <Title>
      Nav입니다.
      <div>
        <Link to="/mypage">마이페이지 가즈아~!</Link>
      </div>
    </Title>
  );
}

const Title = styled.nav`
  box-shadow: ${props => props.theme.selectedBoxShadow};
`;
