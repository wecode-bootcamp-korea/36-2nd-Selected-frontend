const AWS_URL = process.env.REACT_APP_AWS_IP;

export const API = {
  UPLOAD_RESUME: `${AWS_URL}/resume/upload`,
  GET_RESUMES: `${AWS_URL}/resumes/list`,
  GET_RESUME_DETAIL: `${AWS_URL}/resumes`,
  POST_LOGIN: `${AWS_URL}/auths/kakao-login`,
  GET_JOBS: `${AWS_URL}/jobs/list`,
  POST_ADD_RESUME: `${AWS_URL}/resumes/addresume`,
  POST_ADD_SKILL: `${AWS_URL}/resumes/addskill`,
  POST_ADD_CAREERS: `${AWS_URL}/resumes/addusercareer`,
  POST_ADD_LINK: `${AWS_URL}/resumes/addurl`,
  GET_JOBS_DETAIL: `${AWS_URL}/jobs/details`,
  GET_JOBTAGS: `${AWS_URL}/jobs/main?jobTags=2`,
  DELETE_RESUME: `${AWS_URL}/resumes`,
};
