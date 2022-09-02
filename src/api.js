const BASE_URL = 'http://10.58.4.73:3000';
const AWS_URL = 'http://54.180.154.36:3000';

export const API = {
  UPLOAD_RESUME: `${BASE_URL}/resume/upload`,
  GET_RESUMES: `${BASE_URL}/resumes/list`,
  POST_LOGIN: `${BASE_URL}/auths/kakao-login`,
  GET_JOBS: `${AWS_URL}/jobs/list`,
};
