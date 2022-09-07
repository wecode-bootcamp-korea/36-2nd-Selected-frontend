import * as S from './ResumeForm.Styled.js';
import { useState } from 'react';
import FormHeader from './components/ResumeFormHeader/ResumeFormHeader.js';

import { API } from '../../../api.js';
import {
  addCareerDataState,
  addSkillDataState,
  addLinkDataState,
  addResumeDataState,
  addUserDataState,
} from '../../../atom.js';
import { useRecoilValue, useRecoilState } from 'recoil';
import { FORM_DATA_LIST } from './ResumeForm.Data.js';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { goToUrl } from '../../../utills.js';

export default function ResumeForm() {
  const navigate = useNavigate();
  const { resumesId } = useParams();
  const [, setAddCareerData] = useRecoilState(addCareerDataState);
  const addSkillData = useRecoilValue(addSkillDataState);
  const addCareerData = useRecoilValue(addCareerDataState);
  const addLinkData = useRecoilValue(addLinkDataState);

  useEffect(() => {
    if (resumesId !== undefined) {
      fetch(`${API.GET_RESUME_DETAIL}/${resumesId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then(response => response.json())
        .then(data => {
          const { resumeInfo, userCareers } = data;
          const { title, introduction, userName, email } = resumeInfo;
          setAddResumeData({ title, introduction });
          setUserData({ userName, email });

          const { companyName, department, endDate, startDate } = userCareers;
          setAddCareerData([
            ...addCareerData,
            { companyName, department, endDate, startDate },
          ]);
        });
    }
  }, [resumesId]);

  const [addResumeData, setAddResumeData] = useRecoilState(addResumeDataState);
  const [userData, setUserData] = useRecoilState(addUserDataState);

  const handleChangeResumeData = e => {
    const { name, value } = e.target;
    setAddResumeData({ ...addResumeData, [name]: value });
  };

  const handleChangeUserData = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handlePostForm = () => {
    fetch(API.POST_ADD_RESUME, {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(addResumeData),
    })
      .then(response => response.json())
      .then(data => {
        const resumeId = data.resumeId;

        fetch(API.POST_ADD_SKILL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token'),
          },
          body: JSON.stringify({ resumeId, resumesSkill: addSkillData }),
        }).then(response => response.json());

        fetch(API.POST_ADD_CAREERS, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token'),
          },
          body: JSON.stringify({
            resumeId,
            userCareers: addCareerData,
          }),
        }).then(response => response.json());

        fetch(API.POST_ADD_LINK, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token'),
          },
          body: JSON.stringify({ resumeId, linkUrls: addLinkData }),
        })
          .then(response => response.json())
          .then(data => goToUrl(navigate, '/resume'));
      });
  };

  return (
    <S.ResumeForm>
      <FormHeader />
      <S.ResumeTitle>
        <S.ResumeTitleInput
          type="text"
          maxLength="50"
          name="title"
          value={addResumeData.title}
          placeholder="이력서 제목(필수)"
          onChange={handleChangeResumeData}
        />
        <S.ResumeTitleInput
          type="text"
          maxLength="50"
          name="userName"
          value={userData.userName}
          placeholder="이름(필수)"
          onChange={handleChangeUserData}
        />
        <S.ResumeTitleInput
          type="email"
          maxLength="50"
          name="email"
          value={userData.email}
          placeholder="이메일(필수)"
          onChange={handleChangeUserData}
        />
      </S.ResumeTitle>
      <S.FormBody>
        {FORM_DATA_LIST.map(formData => {
          return (
            <FormDescription
              key={formData.id}
              formData={formData}
              addResumeData={addResumeData}
              handleChangeResumeData={handleChangeResumeData}
            />
          );
        })}
      </S.FormBody>
      <S.SubmitFormButton onClick={handlePostForm}>
        작성 완료!
      </S.SubmitFormButton>
    </S.ResumeForm>
  );
}

function FormDescription({ formData, addResumeData, handleChangeResumeData }) {
  const { title, description, inputPlaceholder, additionComponent } = formData;
  const [hasClickedButton, setHasClickedButton] = useState(false);

  return (
    <S.FormDescription>
      <S.Title>{title}</S.Title>
      <S.Description>{description.map(line => line)}</S.Description>
      {title === '간단 소개글' ? (
        <S.Input
          type="textarea"
          name="introduction"
          placeholder={inputPlaceholder}
          value={addResumeData.introduction}
          onChange={handleChangeResumeData}
        />
      ) : (
        <S.FormAddition
          onClick={() => setHasClickedButton(true)}
          disabled={hasClickedButton}
        >
          + 추가
        </S.FormAddition>
      )}
      {hasClickedButton && additionComponent}
    </S.FormDescription>
  );
}
