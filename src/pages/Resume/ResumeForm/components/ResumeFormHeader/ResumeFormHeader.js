import * as S from './ResumeFormHeader.Styled.js';
import { AiFillCaretDown } from 'react-icons/ai';
import { IoMdDownload } from 'react-icons/io';
import { VscGlobe } from 'react-icons/vsc';

export default function FormHeader() {
  return (
    <S.FormHeader>
      <S.FormHeaderLang>
        <VscGlobe className="globe" size="23" />
        <S.FormHeaderLangSelect>
          <option value="ko" defaultValue>
            한국어
          </option>
          <option value="en">English</option>
        </S.FormHeaderLangSelect>
        <AiFillCaretDown className="fillDown" size="14" />
      </S.FormHeaderLang>
      <S.FormHeaderDescription>
        <S.SpanButton color="selectedBlue">
          <span>합격/불합격 단어 가이드</span>
        </S.SpanButton>
        <span>|</span>
        <S.SpanButton color="black">
          <span>내 이력서 단어 체크</span>
        </S.SpanButton>
        <S.SlideButton>
          <S.SlideButtonLabel>
            <S.SlideButtonInput type="checkbox" />
            <S.SLideButtonSpan className="slider round" />
          </S.SlideButtonLabel>
        </S.SlideButton>
        <S.DownloadButton>
          <IoMdDownload size="20" />
        </S.DownloadButton>
      </S.FormHeaderDescription>
    </S.FormHeader>
  );
}
