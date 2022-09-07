import * as S from './DetailMain.Styled';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { API } from '../../api';
import Modal from '../Detail/components/Modal';
import Map from '../Detail/components/Map';
import RecruitList from '../RecruitList/RecruitList';
import { useRef } from 'react';

export default function DetailMain() {
  const { num } = useParams();
  const [data, setData] = useState({});
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    fetch(`${API.GET_JOBS_DETAIL}/${num}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setData(result));
  }, [num]);

  useEffect(() => {
    const handleScroll = e => setScroll(e.currentTarget.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });

  return (
    <>
      <S.StickyContainer ref={ref}>
        <Modal scroll={scroll} height={height} />
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
              <Map />
            </S.TitleBox>
          )}
        </S.DetailMain>
      </S.StickyContainer>
      <RecruitList />
    </>
  );
}
