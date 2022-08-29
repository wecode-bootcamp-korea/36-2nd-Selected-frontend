import styled from 'styled-components';

export default function Nav() {
  return <Title>Nav입니다.</Title>;
}

const Title = styled.nav`
  box-shadow: ${props => props.theme.selectedBoxShadow};
`;
