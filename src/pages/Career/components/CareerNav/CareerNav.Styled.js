import styled from 'styled-components';
import Slider from 'react-slick';
import variables from '../../../../styles/variables';

export const CareerNav = styled.div`
  margin: 16px 48px;
  color: #333333;
`;

export const NavHeader = styled.div`
  ${variables.flex('row', 'flex-start')};
  width: 100%;
`;

export const CategoryDivider = styled.div`
  padding: 3px 14px;
  line-height: 22px;
  font-size: 20px;
  color: #ececec;
`;

export const NavTags = styled.div``;

export const NavToggleTag = styled.button`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 32px;
  padding: 8px 14px;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: #333;
  border: 1px solid transparent;
  background-color: ${({ color }) => color};

  &:hover {
    border: 1px solid rgba(51, 102, 255, 0.3);
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    opacity: 0;
    display: none;
  }
`;

export const Div = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: -30px;
  z-index: 99;
  text-align: right;
  line-height: 30px;
`;

export const DivPre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: -30px;
  z-index: 99;
  text-align: left;
  line-height: 30px;
`;
