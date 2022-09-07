const AWS_URL = process.env.REACT_APP_AWS_IP;
const URL = 'http://10.58.0.52:3000';
export const API = {
  UPLOAD_RESUME: `${URL}/resume/upload`,
  GET_RESUMES: `${URL}/resumes/list`,
  GET_RESUME_DETAIL: `${URL}/resumes`,
  POST_LOGIN: `${URL}/auths/kakao-login`,
  GET_JOBS: `${URL}/jobs/list`,
  POST_ADD_RESUME: `${URL}/resumes/addresume`,
  POST_ADD_SKILL: `${URL}/resumes/addskill`,
  POST_ADD_CAREERS: `${URL}/resumes/addusercareer`,
  POST_ADD_LINK: `${URL}/resumes/addurl`,
  GET_JOBS_DETAIL: `${URL}/jobs/details`,
  GET_JOBTAGS: `${URL}/jobs/main?jobTags=2`,
};
