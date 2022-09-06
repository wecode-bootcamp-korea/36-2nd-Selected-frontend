const BASE_URL = 'http://10.58.4.73:3000';
const BASE_URL2 = 'http://10.58.5.62:3000';
const BASE_URL4 = 'http://10.58.0.52:3000';
const AWS_URL = process.env.REACT_APP_AWS_IP;

export const API = {
  UPLOAD_RESUME: `${BASE_URL}/resume/upload`,
  GET_RESUMES: `${BASE_URL}/resumes/list`,
  GET_RESUME_DETAIL: `${BASE_URL}/resumes`,
  GET_JOBS: `${AWS_URL}/jobs/list`,
  GET_JOBTAGS: `${BASE_URL4}/jobs/main?jobTags=2`,
  POST_ADD_RESUME: `${BASE_URL}/resumes/addresume`,
  POST_ADD_SKILL: `${BASE_URL}/resumes/addskill`,
  POST_ADD_CAREERS: `${BASE_URL}/resumes/addusercareer`,
  POST_ADD_LINK: `${BASE_URL}/resumes/addurl`,
  POST_LOGIN: `${BASE_URL2}/auths/kakao-login`,
};
