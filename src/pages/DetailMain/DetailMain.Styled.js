import styled from 'styled-components';

export const DetailMain = styled.div`
  width: 87.72%;
  margin: 5% auto;
`;

export const DetailCarousel = styled.div`
  width: 100%;
  padding: 0px 600px 0px 100px;
  .slick-prev {
    height: 100%;
    width: 50px;
    left: 1%;
    z-index: 9999;
  }
  .slick-next {
    height: 100%;
    width: 50px;
    right: 1%;
  }
  .slick-prev:before,
  .slick-next:before {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;
    color: #6666;
    opacity: 1;
  }
`;

export const Carousel = styled.div`
  width: 100%;
  height: 610px;
  border-radius: 4px;
  background-image: url(${props => props.src});
`;

export const TitleBox = styled.section`
  padding: 60px 600px 0px 100px;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 28px;
  font-weight: 600;
`;

export const SubTitle = styled.h2`
  display: inline-flex;
  margin-top: 15px;
  font-size: 17px;
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
  font-size: 13px;
`;

export const SubText = styled.span`
  position: relative;
  margin-left: 10px;
  padding: 0 10px;
  color: #999;
`;

export const Text = styled.p`
  margin-top: 60px;
  padding-right: 20px;
  color: #333;
  font-size: 22px;
  white-space: pre-wrap;
  line-height: 1.75;
`;
