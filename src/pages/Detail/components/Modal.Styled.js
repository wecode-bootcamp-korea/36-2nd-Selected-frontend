import styled from 'styled-components';

export const ModalContainer = styled.aside`
  width: 340px;
  display: block;
  box-sizing: border-box;
  position: absolute;
  left: 63%;
`;

export const ModalHeader = styled.header`
  font-size: 14px;
  color: #333;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  padding: 24px 20px;
`;

export const ModalTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  text-align: left;
`;

export const ModalList = styled.ul`
  margin: 24px 0;
  list-style: none;
  overflow: hidden;
  display: flex;
`;

export const ModalTag = styled.li`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const ModalSubTitle = styled.h4`
  font-weight: 600;
  color: #999;
  margin-bottom: 8px;
  line-height: 1.2;
`;

export const ModalMoney = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #333;
`;

export const ApplyBtnContainer = styled.div`
  align-self: auto;
`;

export const ApplyBtn = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  border: 0;
  background-color: #36f;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  cursor: pointer;
`;
