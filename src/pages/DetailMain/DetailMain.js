import * as S from './DetailMain.Styled';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function DetailMain() {
  const { num } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_AWS_IP}/jobs/details/${num}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setData(result));
  }, [num]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.DetailMain>
      {data.jobInfo && (
        <S.DetailCarousel>
          <Slider {...settings}>
            {data.subImage.map(img => (
              <S.Carousel src={img.subImageUrl} key={img.subImageId} />
            ))}
          </Slider>
        </S.DetailCarousel>
      )}
      {data.jobInfo && (
        <S.TitleBox key={data.jobInfo.jobsId}>
          <S.Title>{data.jobInfo.department}</S.Title>
          <S.SubTitle>{data.jobInfo.companyName} </S.SubTitle>
          <S.SubBox>응답률 높음</S.SubBox>
          <S.SubText>서울 . 한국</S.SubText>
          <S.Text>{data.jobInfo.introduction}</S.Text>
        </S.TitleBox>
      )}
    </S.DetailMain>
  );
}
