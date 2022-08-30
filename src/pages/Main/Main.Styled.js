import styled from 'styled-components';
import variables from '../../styles/variables';
import search from '../../assets/search.png';
import company from '../../assets/company.png';
import user from '../../assets/user.png';

export const Search = styled.img.attrs({ src: `${search}` })`
  position: absolute;
  width: 30px;
  left: 40%;
`;

export const Wrap = styled.div`
  margin: 5% auto;
  width: 100%;
  .slick-prev {
    left: calc((100% - 1440px) / 2);
    z-index: 9999;
  }
  .slick-next {
    right: calc((100% - 1400px) / 2);
  }
  .slick-prev:before,
  .slick-next:before {
    ${variables.flex()}
    position: absolute;
    top: -95px;
    width: 40px;
    height: 90px;
    opacity: 0.75;
    border-radius: 30px;
    background-color: #fff;
    color: #6666;
  }
`;

export const PositionInfo = styled.div`
  ${variables.flex()}
  ${variables.absoluteCenter}
  height: 80px;
  width: 90%;
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-top: 150px;
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

export const CarouselShortCut = styled.a`
  ${variables.flex()}
  padding-top: 20px;
  font-weight: bold;
  text-decoration: none;
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
  width: 100%;
  height: 400px;
  padding: 12px 12px 25px 12px;
`;

export const JobSuggest = styled.div`
  max-width: 100vw;
  background: #f4f8fb;
  padding: 60px;
`;

export const SelectedAi = styled.div`
  ${variables.flex()}
  padding-top: 60px;
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
  height: 200px;
  width: 100%;
  margin: 20px 0px 60px 0px;
  padding: 0px 121px 0px 121px;
  background: linear-gradient(90deg, #ddebff -0.28%, #b7d8ff);
  cursor: pointer;
`;

export const WorkOrLeave = styled.div`
  font-size: 30px;
  line-height: 30px;
  font-weight: 700;
  color: #5071dc;
  padding: 60px;
`;

export const WorkOrLeaveButton = styled.button`
  ${variables.flex()};
  width: 150px;
  height: 40px;
  margin-top: 10px;
  border: none;
  border-radius: 25px;
  background-color: #5071dc;
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  line-height: 16px;
  cursor: pointer;
`;

export const ProfileMatchUp = styled.ul`
  ${variables.flex()};
  height: 100px;
  width: 100%;
  padding: 60px 121px 85px 121px;
`;

export const Profile = styled.li`
  ${variables.flex()};
  position: relative;
  flex: 1 0;
  color: #333;
  font-size: 23px;
  font-weight: 500;
  height: 100px;
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
  font-size: 23px;
  font-weight: 500;
  height: 100px;
  border-top-right-radius: 38.5px;
  border-bottom-right-radius: 38.5px;
  border-left: none;
  background-color: #f2fbf5;
  cursor: pointer;
`;

export const CompanyImg = styled.img.attrs({ src: `${company}` })`
  position: absolute;
  width: 30px;
  left: 38%;
`;

export const UserImg = styled.img.attrs({ src: `${user}` })`
  position: absolute;
  width: 30px;
  left: 37%;
`;

export const Tag = styled.div`
  ${variables.flex()};
  font-size: 30px;
  padding-bottom: 15px;
`;

export const TagBold = styled.div`
  padding-right: 15px;
  font-weight: 700;
`;

export const TagDetail = styled.div`
  ${variables.flex()}
  font-size: 18px;
  color: #666666;
  cursor: pointer;
`;

export const JobInfoImg = styled.img`
  width: 100%;
  height: 400px;
  padding: 12px 12px 12px 12px;
`;

export const CompanyAndDepart = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CompanyName = styled.div`
  font-size: 25px;
  font-weight: 700;
  padding-left: 12px;
  padding-bottom: 5px;
  color: #333;
`;
export const Department = styled.div`
  padding-left: 12px;
  font-size: 18px;
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
  font-size: 17px;
  font-weight: 700;
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
  padding: 0px 50px 0px 50px;

  .slick-prev {
    left: calc((100% - 1330px) / 2);
    z-index: 9999;
  }
  .slick-next {
    right: calc((100% - 1260px) / 2);
  }
  .slick-prev:before,
  .slick-next:before {
    ${variables.flex()}
    position: absolute;
    top: -280px;
    width: 50px;
    height: 50px;
    opacity: 1;
    border-radius: 50%;
    background-color: white;
    border: 1px solid #e1e2e3;
    color: #e1e2e3;
  }
`;
