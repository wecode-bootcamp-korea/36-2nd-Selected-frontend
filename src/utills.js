export const goToUrl = (navigate, url) => {
  navigate(url);
  window.scrollTo(0, 0);
};

export const request = async (uri, options = {}) => {
  try {
    const response = await fetch(uri, options);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error('API통신 실패 => response.ok :', response.ok);
  } catch (e) {
    console.error('API통신 실패 :', e.message);
  }
};
