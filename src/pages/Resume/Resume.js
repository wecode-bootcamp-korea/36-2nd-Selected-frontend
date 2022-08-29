import * as S from './Resume.Styled.js';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { IoDocuments } from 'react-icons/io5';
import { MdDriveFolderUpload } from 'react-icons/md';
import { BsFillCheckCircleFill } from 'react-icons/bs';

export default function Resume() {
  return (
    <S.ResumeContainer>
      <S.Header>
        <S.HeaderTitle>최근 문서</S.HeaderTitle>
        <S.HeaderDescription>
          원티드 이력서 소개
          <AiOutlineInfoCircle />
        </S.HeaderDescription>
      </S.Header>
      <S.ResumeMakeBox>
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
      {RESUME_LIST.map(
        ({
          userId,
          resumeId,
          language,
          title,
          hasCompleted,
          isMatchUpResume,
          hasCareerCertification,
        }) => {
          return (
            <S.Resume key={resumeId} userId={userId}>
              <S.ResumeInfo>
                <S.ResumeInfoButton name="matchUp" hidden={!isMatchUpResume}>
                  매치업 이력서
                </S.ResumeInfoButton>
                <S.ResumeInfoButton
                  name="career"
                  hidden={!hasCareerCertification}
                >
                  경력인증
                  <BsFillCheckCircleFill size="15" />
                </S.ResumeInfoButton>
              </S.ResumeInfo>
              <S.ResumeTitle hasCompleted={hasCompleted}>
                <S.ResumeTitleTextBox title="true">
                  {title}
                </S.ResumeTitleTextBox>
                <S.ResumeTitleTextBox>2022.08.29</S.ResumeTitleTextBox>
              </S.ResumeTitle>
              <S.ResumeStatus hasCompleted={hasCompleted}>
                <S.ResumeStatusLang>
                  {language === 'kor' ? '한' : '영'}
                </S.ResumeStatusLang>
                <S.ResumeStatusInfo>
                  {hasCompleted ? '작성 완료' : '작성 중'}
                </S.ResumeStatusInfo>
                <div>
                  <BiDotsVerticalRounded />
                </div>
              </S.ResumeStatus>
            </S.Resume>
          );
        }
      )}
    </S.ResumeContainer>
  );
}

const RESUME_LIST = [
  {
    userId: 1,
    resumeId: 1,
    language: 'kor',
    title: 'FE 개발자 임채동입니다.',
    hasCompleted: true,
    isMatchUpResume: true,
    hasCareerCertification: true,
  },
  {
    userId: 1,
    resumeId: 2,
    language: 'kor',
    title: 'FE 개발자 2.',
    hasCompleted: true,
    isMatchUpResume: true,
    hasCareerCertification: true,
  },
  {
    userId: 1,
    resumeId: 3,
    language: 'kor',
    title: 'FE 개발자 3.',
    hasCompleted: true,
    isMatchUpResume: true,
    hasCareerCertification: true,
  },
  {
    userId: 1,
    resumeId: 4,
    language: 'kor',
    title: 'FE 개발자 4.',
    hasCompleted: true,
    isMatchUpResume: false,
    hasCareerCertification: true,
  },
  {
    userId: 1,
    resumeId: 5,
    language: 'kor',
    title: 'FE 개발자 5.',
    hasCompleted: false,
    isMatchUpResume: false,
    hasCareerCertification: true,
  },
  {
    userId: 1,
    resumeId: 6,
    language: 'kor',
    title: 'FE 개발자 6.',
    hasCompleted: false,
    isMatchUpResume: false,
    hasCareerCertification: true,
  },
];
