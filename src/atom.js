import { atom } from 'recoil';

export const addSkillDataState = atom({
  key: 'addSkillDataState',
  default: [],
});

export const addCareerDataState = atom({
  key: 'addCareerDataState',
  default: [],
});

export const addLinkDataState = atom({
  key: 'addLinkDataState',
  default: [],
});

export const addResumeDataState = atom({
  key: 'addResumeDataState',
  default: { title: '', introduction: '' },
});

export const addUserDataState = atom({
  key: 'addUserDataState',
  default: { userName: '', email: '' },
});

export const hasCareerInfoState = atom({
  key: 'hasCareerInfoState',
  default: false,
});
