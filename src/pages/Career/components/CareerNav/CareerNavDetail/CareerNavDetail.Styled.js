import styled from 'styled-components';
import variables from '../../../../../styles/variables';

export const NavDetails = styled.div`
  ${variables.flex('row', 'space-between')};
  width: 100%;
  margin: 32px 0;
  padding-bottom: 32px;
  border-bottom: 1.5px solid rgba(236, 236, 236, 0.7);
`;

export const NavDetailsSelectors = styled.div`
  ${variables.flex('row', 'space-between')};
  min-width: 30%;
`;

export const NavDetailButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 40px;
  margin-right: 16px;
  margin-bottom: 0;
  padding: 0 15px !important;
  border-radius: 5px;
  border: 1px solid #ececec;
  background: #fff;
  color: #333;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const NavDetailTitleSpan = styled.span`
  margin-right: 15px;
  color: #333;
  white-space: nowrap;
  letter-spacing: normal;
  font-size: 14px;
  font-weight: 400;
`;

export const NavDetailOptionSpan = styled.span`
  margin-right: 5px;
  color: #36f !important;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ModalBackGround = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 4;
  background: ${({ background }) => {
    if (background === 'none') {
      return 'none';
    }
    return;
  }};
  background-color: rgba(0, 0, 0, 0.5);
`;

export const NavDetailModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  min-height: 500px;
  max-height: 687px;
  z-index: 5;
  background-color: white;
  border-radius: 10px;
  color: #999;
  font-weight: 500;
`;

export const NavDetailModalContainer = styled.div`
  padding: 16px;
  border-radius: 10px;
`;

export const DetailModalHeader = styled.div`
  ${variables.flex('row', 'center')};
  width: 100%;
  height: 32px;
  margin-bottom: 32px;
  z-index: 6;
`;

export const DetailModalReset = styled.button`
  ${variables.flex('row', 'center')};
  position: absolute;
  left: 16px;
  background: none;
  border: none;
  color: #999;

  svg {
    margin-left: 8px;
    color: #999;
    opacity: 0.5;
  }
`;

export const DetailModalTitle = styled.span`
  color: #000;
`;

export const DetailModalCloseButton = styled.button`
  position: absolute;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const DetailModalCountrySelector = styled.div`
  width: 100%;
  height: 32px;
  border-radius: 5px;
`;

export const DetailModalCountryButton = styled.select`
  width: 100%;
  height: 40px;
  margin-bottom: 16px;
  padding: 0 10px;
  border: 1px solid #e1e2e3;
  border-radius: 5px;
  appearance: none;
  background-color: #fff;
  color: #333;
  font-size: 15px;
  font-weight: 400;
`;

export const DetailModalLocationHeader = styled.div`
  ${variables.flex('row', 'flex-start')};
  margin-bottom: 8px;
`;

export const DetailModalLocationHeaderTitle = styled.div`
  width: 50%;
`;

export const DetailModalLocationSelectorContainer = styled.div`
  ${variables.flex('row', 'center', 'flex-start')};
  margin-bottom: 16px;
  width: 100%;
  min-height: 200px;
  border: 1px solid #e1e2e3;
`;

export const DetailModalLocationUl = styled.ul`
  ${variables.flex('column', 'flex-start')};
  display: block;
  width: 50%;
  height: 100%;
  border-radius: 3px;
`;

export const LocationSelectorLi = styled.li`
  padding-left: 15px;
  color: #333;
  font-size: 15px;
  border: 1px solid #e1e2e3;
  line-height: 33px;
  cursor: pointer;
  ${({ locationId, selectedLocation }) => {
    if (
      locationId.main === selectedLocation.main &&
      locationId.sub === selectedLocation.sub
    ) {
      return `
      color: #36f;
      font-weight: 600;
      background-color: #f6f8ff;
      `;
    }
    return;
  }};
`;

export const DetailModalTagsContainer = styled.div`
  min-height: 100px;
  padding: 16px;
  background-color: #f6f6f6;
`;

export const DetailModalTagButton = styled.div`
  display: inline-block;
  margin: 10px 6px 0 0;
  padding: 0 16px 0 15px;
  background: #fff;
  border: 1px solid #36f;
  border-radius: 17px;
  line-height: 32px;
  font-size: 13px;
  font-weight: 600;
  font-style: normal;
  letter-spacing: normal;
  color: #36f;
`;

export const DetailModalSubmitContainer = styled.div`
  padding: 16px;
`;

export const DetailModalSubmitButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 0;
  color: #fff;
  background-color: #36f;
  border: none;
  border-radius: 25px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: normal;
  cursor: pointer;
`;

export const CareerModal = styled.div`
  position: absolute;
  left: 170px;
  top: 140px;
  width: 468px;
  height: 174px;
  padding: 16px;
  border: 1px solid #e1e2e3;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
  background-color: #fff;
  color: #999;
  font-weight: 500;
  overflow: hidden;
  z-index: 99;
`;

export const CareerModalContainer = styled.div``;

export const CareerModalHeader = styled.div`
  ${variables.flex('row', 'flex-start')};
  padding: 30px 15px 20px;
  color: #333;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
`;

export const CareerModalSubmitContainer = styled.div`
  ${variables.flex('row', 'flex-end')};
  width: 100%;
  padding-top: 32px;
  border-top: 1px solid rgb(0 0 0 / 15%);
`;

export const CareerModalSubmitButton = styled.button`
  ${({ title }) => (title === '취소' ? 'color: #767676;' : 'color: #36f;')};
  min-width: 0;
  padding-right: 10px;
  background: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;
