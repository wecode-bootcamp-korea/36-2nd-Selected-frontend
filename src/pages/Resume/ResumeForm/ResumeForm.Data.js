import FormCareer from './components/FormCareer/FormCareer.js';
import FormSkill from './components/FormSkill/FormSkill.js';
import FormLink from './components/FormLink/FormLink.js';

export const FORM_DATA_LIST = [
  {
    id: 1,
    title: '간단 소개글',
    description: [
      '• 본인의 업무 경험을 기반으로 핵심역량과 업무 스킬을 간단히 작성해주세요.',
      <br key="1" />,
      '• 3~5줄로 요약하여 작성하는 것을 추천합니다!',
    ],
    inputPlaceholder:
      '간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요. (3~5줄 권장)',
  },
  {
    id: 2,
    title: '경력',
    description: [
      '• 담당하신 업무 중 우선순위가 높은 업무를 선별하여 최신순으로 작성해주세요.',
      <br key="1" />,
      '• 신입의 경우, 직무와 관련된 대외활동, 인턴, 계약직 경력 등이 있다면 작성해주세요.',
      <br key="2" />,
      '• 업무 또는 활동 시 담당했던 역할과 과정, 성과에 대해 자세히 작성해주세요. ',
      <br key="3" />,
      '• 업무 성과는 되도록 구체적인 숫자 혹은 [%]로 표현해주세요!',
      <br key="4" />,
      '• 경력 조회 후 기업명이 실제와 다른 경우, 부서명/직책 란에 원하시는 기업명을 작성해주세요.',
    ],

    inputPlaceholder:
      '간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요. (3~5줄 권장)',
    additionComponent: <FormCareer />,
  },
  {
    id: 3,
    title: '스킬',
    description: [
      '• 개발 스택, 디자인 툴, 마케팅 툴 등 가지고 있는 직무와 관련된 스킬을 추가해보세요.',
      <br key="1" />,
      '• 데이터 분석 툴이나 협업 툴 등의 사용해본 경험이 있으신 툴들도 추가해보세요.',
      <br key="2" />,
      '• 스킬을 등록한 원티드 이력서는 일반 이력서에 비해 서류통과율이 더 높습니다.',
    ],

    inputPlaceholder:
      '간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요. (3~5줄 권장)',
    additionComponent: <FormSkill />,
  },
  {
    id: 4,
    title: '링크',
    description: [
      '깃헙, 노션으로 작성한 포트폴리오, 구글 드라이브 파일 등 업무 성과를 보여줄 수 있는 링크가 있다면 작성해주세요.',
    ],
    inputPlaceholder: '',
    additionComponent: <FormLink />,
  },
];
