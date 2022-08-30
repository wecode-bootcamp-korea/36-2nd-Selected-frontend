const API_END_POINT = 'http://0.0.0.0:3000/';

export const API = {
  UPLOAD_RESUME: '/resume/upload',
};

export const request = async (uri, options = {}) => {
  try {
    const fullUri = `${API_END_POINT}${uri}`;
    const response = await fetch(fullUri, options);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error('API통신 실패 => response.ok :', response.ok);
  } catch (e) {
    console.error('API통신 실패 :', e.message);
  }
};
