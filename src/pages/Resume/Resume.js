import * as S from './Resume.Styled.js';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { IoDocuments } from 'react-icons/io5';
import { MdDriveFolderUpload } from 'react-icons/md';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { API } from '../../api.js';
import { goToUrl } from '../../utills.js';
import { useNavigate } from 'react-router-dom';

export default function Resume() {
  const navigate = useNavigate();
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    fetch(API.GET_RESUMES, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setResumeList(data);
      });
  }, []);

  return (
    <S.ResumeContainer>
      <S.Header>
        <S.HeaderTitle>최근 문서</S.HeaderTitle>
        <S.HeaderDescription>
          원티드 이력서 소개
          <AiOutlineInfoCircle />
        </S.HeaderDescription>
      </S.Header>
      <S.ResumeMakeBox onClick={() => goToUrl(navigate, '/resume/form')}>
        <S.ResumeMakeBoxIcon color="blue">
          <IoDocuments size="25" />
        </S.ResumeMakeBoxIcon>
        새 이력서 작성
      </S.ResumeMakeBox>
      <S.ResumeMakeBox>
        <label htmlFor="upload">
          <S.ResumeMakeBoxIcon color="grey">
            <MdDriveFolderUpload size="25" />
          </S.ResumeMakeBoxIcon>
          파일 업로드
        </label>
        <input type="file" id="upload" name="upload" accept=".pdf" hidden />
      </S.ResumeMakeBox>
      {resumeList.length > 0 &&
        resumeList.map(({ userId, resumeId, title, date }) => {
          return (
            <S.Resume key={resumeId} userId={userId}>
              <S.ResumeInfo>
                <S.ResumeInfoButton name="matchUp">
                  매치업 이력서
                </S.ResumeInfoButton>
                <S.ResumeInfoButton name="career">
                  경력인증
                  <BsFillCheckCircleFill size="15" />
                </S.ResumeInfoButton>
              </S.ResumeInfo>
              <S.ResumeTitle hasCompleted={true}>
                <S.ResumeTitleTextBox title="true">
                  {title}
                </S.ResumeTitleTextBox>
                <S.ResumeTitleTextBox>{date}</S.ResumeTitleTextBox>
              </S.ResumeTitle>
              <S.ResumeStatus hasCompleted={true}>
                <S.ResumeStatusLang>한</S.ResumeStatusLang>
                <S.ResumeStatusInfo>작성 완료</S.ResumeStatusInfo>
                <div>
                  <BiDotsVerticalRounded />
                </div>
              </S.ResumeStatus>
            </S.Resume>
          );
        })}
    </S.ResumeContainer>
  );
}
