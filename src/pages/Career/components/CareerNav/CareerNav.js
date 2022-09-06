import * as S from './CareerNav.Styled.js';
import { useState } from 'react';
import {
  NavHeaderSelectMain,
  NavHeaderSelectSub,
} from './NavHeaderSelect/NavHeaderSelect.js';
import CareerNavDetail from './CareerNavDetail/CareerNavDetail.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineRight } from 'react-icons/ai';

export default function CareerNav() {
  const [isMainCategory] = useState(false);
  const [isOpened, setIsOpened] = useState({ main: false, sub: false });
  const [selectedCategory, setSelectedCategory] = useState({
    mainJobId: 1,
    mainJobName: '개발',
    subJobId: 0,
    subJobName: '개발 전체',
  });

  const settings = {
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: (
      <S.Div>
        <AiOutlineRight />
      </S.Div>
    ),
    prevArrow: (
      <S.DivPre>
        <AiOutlineRight />
      </S.DivPre>
    ),
  };
  return (
    <S.CareerNav>
      <S.NavHeader>
        <NavHeaderSelectMain
          isOpened={isOpened}
          setIsOpened={setIsOpened}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          fontSize="20px"
        />
        {!isMainCategory && (
          <NavHeaderSelectSub
            isOpened={isOpened}
            setIsOpened={setIsOpened}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            fontSize="16px"
          />
        )}
      </S.NavHeader>
      <CareerNavDetail />
      <S.NavTags>
        <S.StyledSlider {...settings}>
          <S.NavToggleTag color="rgb(242, 251, 245)">
            연봉이 최고의 복지
          </S.NavToggleTag>
          <S.NavToggleTag color="rgb(243, 249, 254)">재택근무</S.NavToggleTag>
          <S.NavToggleTag color="rgb(243, 242, 251)">
            퇴사율 10% 이하
          </S.NavToggleTag>
          <S.NavToggleTag color="rgb(246, 248, 238)">급성장 중</S.NavToggleTag>
          <S.NavToggleTag color="rgb(247, 242, 249)">병역특례</S.NavToggleTag>
          <S.NavToggleTag color="rgb(238, 250, 249)">50인 이하</S.NavToggleTag>
          <S.NavToggleTag color="rgb(242, 251, 245)">
            연봉이 최고의 복지
          </S.NavToggleTag>
        </S.StyledSlider>
      </S.NavTags>
    </S.CareerNav>
  );
}
