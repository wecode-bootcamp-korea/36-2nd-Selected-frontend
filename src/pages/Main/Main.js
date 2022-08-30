import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import * as S from './Main.Styled.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Main() {
  const [carouselData, setCarouselData] = useState([]);
  const [jobInfoData, setJobInfoData] = useState([]);

  useEffect(() => {
    fetch('/data/CarouselData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setCarouselData(result));
  }, []);

  useEffect(() => {
    fetch('/data/JobInfoData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => setJobInfoData(data));
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
  };

  const JobInfoCarousel = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <>
      <S.Wrap>
        <Slider {...settings}>
          {carouselData?.map(carouselList => {
            return (
              <>
                <S.Company src={carouselList.img} />
                <S.CompanyInfo>{carouselList.companyInfo}</S.CompanyInfo>
                <S.CompanySubInfo>
                  {carouselList.companySubInfo}
                </S.CompanySubInfo>
                <S.CarouselShortCut href="www.wecode.com">
                  바로가기 〉
                </S.CarouselShortCut>
              </>
            );
          })}
        </Slider>
      </S.Wrap>
      <S.PositionInfo>
        채용 중인 포지션 보러가기
        <S.Search />
      </S.PositionInfo>
      <S.JobSuggest>
        <S.SelectedAi>Selected AI</S.SelectedAi>
        <S.SelectedAiDetail>
          Selected AI 가 제안하는 합격률 높은 포지션
        </S.SelectedAiDetail>
        <S.SelectedAiRecommend>
          회원가입하면 포지션을 추천해드려요.
          <S.SelectedButton>지금 시작하기</S.SelectedButton>
        </S.SelectedAiRecommend>
      </S.JobSuggest>
      <S.ConfuseDobbyIsFree>
        <S.WorkOrLeave>
          입사일 퇴사일 헷갈릴때, 내 경력 한눈에 모아보기!
          <S.WorkOrLeaveButton>지금 확인하기</S.WorkOrLeaveButton>
        </S.WorkOrLeave>
      </S.ConfuseDobbyIsFree>
      <S.ProfileMatchUp>
        <S.Profile>
          내 프로필
          <S.UserImg />
        </S.Profile>
        <S.MatchUp>
          매치업
          <S.CompanyImg />
        </S.MatchUp>
      </S.ProfileMatchUp>
      <S.JobInfoWrap>
        <S.Tag>
          <S.TagBold>
            #{jobInfoData.length > 0 && jobInfoData[0].tag}{' '}
          </S.TagBold>
          회사를 소개합니다
        </S.Tag>
        <S.TagDetail>바로가기 〉</S.TagDetail>
        <Slider {...JobInfoCarousel}>
          {jobInfoData.map(jobInfoList => {
            return (
              <>
                <S.JobInfoImg src={jobInfoList.mainImageUrl} />
                <S.companyDepartButton>
                  <S.CompanyAndDepart key={jobInfoList.jobId}>
                    <S.CompanyName>{jobInfoList.companyName}</S.CompanyName>
                    <S.Department>{jobInfoList.department}</S.Department>
                  </S.CompanyAndDepart>
                  <S.JobInfoButton>팔로우</S.JobInfoButton>
                </S.companyDepartButton>
              </>
            );
          })}
        </Slider>
      </S.JobInfoWrap>
    </>
  );
}
