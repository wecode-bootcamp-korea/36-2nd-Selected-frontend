import styled from 'styled-components';

export const FormHeader = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
  width: 100%;
  height: 100%;
`;

export const FormHeaderLang = styled.div`
  ${({ theme }) => theme.variables.flex()};
  position: relative;

  .globe {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-46%) translateX(30%);
    opacity: 0.5;
  }

  .fillDown {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-46%) translateX(-30%);
    opacity: 0.5;
  }
`;

export const FormHeaderLangSelect = styled.select`
  min-width: 100px;
  min-height: 38px;
  padding-left: 37px;
  padding-right: 20px;
  border-radius: 2px;
  border: 1px solid black;
  appearance: none;
  font-size: 14px;

  option {
    display: block;
    min-height: 1.2em;
    padding: 0px 2px 1px;
    font-weight: normal;
    white-space: nowrap;
  }
`;

export const FormHeaderDescription = styled.div`
  ${({ theme }) => theme.variables.flex()};
`;

export const SpanButton = styled.button`
  padding: 0.2rem 1rem;
  border: none;
  background: none;
  font-weight: 600;
  font-size: 14px;
  color: ${({ color, theme }) =>
    color === 'selectedBlue' ? theme.theme.selectedBlue : color};
`;

export const SlideButton = styled.div``;

export const SlideButtonLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 56px;
  height: 30px;
`;

export const SlideButtonInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: #03c803;
  }

  &:focus + .slider {
    box-shadow: 0 0 1px #03c803;
  }

  &:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

export const SLideButtonSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  &.round {
    border-radius: 34px;
  }

  &.round:before {
    border-radius: 50%;
  }
`;

export const DownloadButton = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 1rem;
  background: none;
  border: 1px solid #999;
  border-radius: 3px;

  svg {
    color: #76797e;
  }
`;
