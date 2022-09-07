import styled from 'styled-components';

export const StickyContainer = styled.div``;

export const DetailMain = styled.div`
  width: 87.72%;
  margin: 7% auto;
`;

export const DetailCarousel = styled.div`
  width: 97%;
  padding: 0px 450px 0px 100px;

  .slick-prev {
    height: 100%;
    width: 50px;
    left: 1%;
    font-weight: 900;
    z-index: 9999;
    &::before {
      content: '〈';
    }
  }

  .slick-next {
    height: 100%;
    width: 50px;
    right: 1%;
    font-weight: 900;
    &::before {
      content: '〉';
    }
  }

  .slick-prev:before,
  .slick-next:before {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 40px;
    color: #6666;
    opacity: 1;
  }
`;

export const Carousel = styled.div`
  width: 100%;
  height: 480px;
  border-radius: 4px;
  background-image: url(${props => props.src});
`;

export const TitleBox = styled.section`
  padding: 60px 600px 0px 100px;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 22px;
  font-weight: 600;
`;

export const SubTitle = styled.h2`
  display: inline-flex;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 600;
`;

export const SubBox = styled.div`
  display: inline-flex;
  position: relative;
  margin: 0 0 0 10px;
  top: -1px;
  padding: 5px 5px 5px 5px;
  color: #36f;
  background-color: #fff;
  border: 1px solid #36f;
  border-radius: 2px;
  font-size: 10px;
`;

export const SubText = styled.span`
  position: relative;
  margin-left: 10px;
  padding: 0 10px;
  font-size: 14px;
  color: #999;
`;

export const Text = styled.p`
  margin-top: 60px;
  margin-bottom: 16px;
  padding-right: 20px;
  padding-bottom: 64px;
  color: #333;
  font-size: 16px;
  white-space: pre-wrap;
  line-height: 1.75;
  border-bottom: 1px solid #eee;
`;
