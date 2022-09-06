const BASE_URL = 'http://10.58.4.73:3000';
const AWS_URL = process.env.REACT_APP_AWS_IP;

export const API = {
  UPLOAD_RESUME: `${BASE_URL}/resume/upload`,
  GET_RESUMES: `${BASE_URL}/resumes/list`,
  GET_RESUME_DETAIL: `${BASE_URL}/resumes`,
  POST_LOGIN: `${BASE_URL}/auths/kakao-login`,
  GET_JOBS: `${AWS_URL}/jobs/list`,
  POST_ADD_RESUME: `${BASE_URL}/resumes/addresume`,
  POST_ADD_SKILL: `${BASE_URL}/resumes/addskill`,
  POST_ADD_CAREERS: `${BASE_URL}/resumes/addusercareer`,
  POST_ADD_LINK: `${BASE_URL}/resumes/addurl`,
};
