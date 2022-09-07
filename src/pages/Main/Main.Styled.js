import styled from 'styled-components';
import variables from '../../styles/variables';
import search from '../../assets/search.png';
import company from '../../assets/company.png';
import user from '../../assets/user.png';

export const MapWrap = styled.div`
  width: 70%;
`;

export const Search = styled.img.attrs({ src: `${search}` })`
  position: absolute;
  width: 25px;
  left: 35%;
`;

export const Wrap = styled.div`
  margin: 5% auto;
  width: 100%;
  .slick-prev {
    left: calc((100% - 1130px) / 2);
    z-index: 9;
    ::before {
      ${variables.flex()}
      position: absolute;
      top: -95px;
      width: 32px;
      height: 62px;
      opacity: 0.75;
      border-radius: 30px;
      background-color: #fff;
      color: #6666;
      content: '<';
    }
  }
  .slick-next {
    right: calc((100% - 1100px) / 2);
    ::before {
      ${variables.flex()}
      position: absolute;
      top: -95px;
      width: 32px;
      height: 62px;
      opacity: 0.75;
      border-radius: 30px;
      background-color: #fff;
      color: #6666;
      content: '>';
    }
  }
`;

export const PositionInfo = styled.div`
  ${variables.flex()}
  ${variables.absoluteCenter}
  height: 70px;
  width: 70%;
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-top: 80px;
  border-radius: 35px;
  position: relative;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    #01a9fe -12%,
    #2f5fef 37%,
    #046afe 72%,
    #00d2dd 110%
  );
`;

export const CarouselShortCut = styled.div`
  ${variables.flex()}
  padding-top: 20px;
  font-weight: bold;
  text-decoration: none;
  color: blue;
`;

export const CompanySubInfo = styled.div`
  ${variables.flex()}
  font-size: 18px;
  padding-top: 10px;
  color: #666666;
`;

export const CompanyInfo = styled.div`
  ${variables.flex()}
  font-size: 23px;
  font-weight: 700;
`;

export const Company = styled.img`
  ${variables.flex()}
  width: 100%;
  height: 320px;
  padding: 12px 15px 25px 15px;
`;

export const JobSuggest = styled.div`
  max-width: 100vw;
  height: 350px;
  background: #f4f8fb;
  padding: 45px;
`;

export const SelectedAi = styled.div`
  ${variables.flex()}
  padding-top: 30px;
  padding-bottom: 40px;
  font-size: 50px;
  background-color: #f2f7fc;
  font-weight: bold;
`;

export const SelectedAiDetail = styled.div`
  ${variables.flex()}
  background-color: #f2f7fc;
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 10px;
`;
export const SelectedAiRecommend = styled.div`
  ${variables.flex()};
  flex-direction: column;
  background-color: #f2f7fc;
  font-size: 18px;
  color: #666666;
`;

export const SelectedButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  margin-top: 30px;
  background-color: #36f;
  font-size: 16px;
  font-weight: 700;
  color: #fefefe;
  line-height: 22px;
  cursor: pointer;
`;

export const ConfuseDobbyIsFree = styled.div`
  height: 150px;
  width: 100%;
  margin: 20px 0px 60px 0px;
  padding: 0px 121px 0px 121px;
  background: linear-gradient(90deg, #ddebff -0.28%, #b7d8ff);
  cursor: pointer;
`;

export const WorkOrLeave = styled.div`
  font-size: 25px;
  line-height: 30px;
  font-weight: 700;
  color: #5071dc;
  padding: 40px;
`;

export const WorkOrLeaveButton = styled.button`
  ${variables.flex()};
  width: 120px;
  height: 40px;
  margin-top: 10px;
  border: none;
  border-radius: 25px;
  background-color: #5071dc;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  cursor: pointer;
`;

export const ProfileMatchUp = styled.ul`
  ${variables.flex()};

  height: 200px;
  width: 70%;
  margin-left: 15%;
`;

export const Profile = styled.li`
  ${variables.flex()};
  position: relative;
  flex: 1 0;
  color: #333;
  font-size: 19px;
  font-weight: 500;
  height: 80px;
  background-color: #f2f5ff;
  border-top-left-radius: 38.5px;
  border-bottom-left-radius: 38.5px;
  border-left: none;
  cursor: pointer;
`;
export const MatchUp = styled.li`
  ${variables.flex()};
  flex: 1 0;
  position: relative;
  font-size: 19px;
  font-weight: 500;
  height: 80px;
  border-top-right-radius: 38.5px;
  border-bottom-right-radius: 38.5px;
  border-left: none;
  background-color: #f2fbf5;
  cursor: pointer;
`;

export const CompanyImg = styled.img.attrs({ src: `${company}` })`
  position: absolute;
  width: 25px;
  left: 38%;
`;

export const UserImg = styled.img.attrs({ src: `${user}` })`
  position: absolute;
  width: 25px;
  left: 35%;
`;

export const Tag = styled.div`
  ${variables.flex()};
  font-size: 25px;
  padding-bottom: 15px;
`;

export const TagBold = styled.div`
  padding-right: 15px;
  font-weight: 700;
`;

export const TagDetail = styled.div`
  ${variables.flex()}
  font-size: 15px;
  color: #666666;
  cursor: pointer;
`;

export const JobInfoImg = styled.img`
  ${variables.flex()}
  width: 100%;
  height: 300px;
  padding: 10px;
`;

export const CompanyAndDepart = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CompanyName = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding-left: 12px;
  padding-bottom: 5px;
  color: #333;
`;
export const Department = styled.div`
  padding-left: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #999;
`;
export const JobInfoButton = styled.button`
  ${variables.flex()}
  border: 1px solid #e1e2e3;
  border-radius: 25px;
  padding: 20px 30px 20px 30px;
  margin-right: 12px;
  height: 40px;
  font-size: 15px;
  font-weight: 600;
  color: #36f;
  background-color: #fff;
  cursor: pointer;
`;

export const companyDepartButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const JobInfoWrap = styled.div`
  margin: 5% auto;
  width: 100%;
  padding: 0px 15% 0px 15%;

  .slick-prev {
    left: calc((100% - 1330px) / 2);
    z-index: 1;
    ::before {
      ${variables.flex()}
      position: absolute;
      top: -230px;
      left: 180px;
      width: 40px;
      height: 40px;
      opacity: 0.75;
      border-radius: 50%;
      background-color: white;
      border: 1px solid lightgray;
      color: black;
      box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
      pointer-events: all;
      content: '<';
    }
  }
  .slick-next {
    right: calc((100% - 1260px) / 2);
    &:hover {
      color: solid black;
    }
    ::before {
      ${variables.flex()}
      position: absolute;
      top: -230px;
      right: 140px;
      width: 40px;
      height: 40px;
      opacity: 0.75;
      border-radius: 50%;
      background-color: white;
      border: 1px solid lightgray;
      color: black;
      box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
      content: '>';
    }
  }
`;

export const borderbox = styled.div`
  border-bottom: 1px solid black;
  margin-top: 50px;
`;
