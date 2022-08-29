import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Nav() {
  return (
    <Title>
      Nav입니다.<Link to="/resume">이력서 페이지 가즈아!!!</Link>
    </Title>
  );
}

const Title = styled.nav`
  box-shadow: ${props => props.theme.selectedBoxShadow};
`;
