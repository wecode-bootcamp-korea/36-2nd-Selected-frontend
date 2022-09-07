import { useState } from 'react';
import { addCareerDataState, hasCareerInfoState } from '../../../../../atom.js';
import * as S from './FormCareer.Styled.js';
import { useRecoilState } from 'recoil';

export default function FormCareer() {
  const [isCheckedFormCareer, setIsCheckedFormCareer] =
    useRecoilState(hasCareerInfoState);
  const [dateInfo, setDateInfo] = useState({
    startYear: '',
    startMonth: '',
    endYear: '',
    endMonth: '',
  });

  const [careerInfo, setCareerInfo] = useState({
    companyName: '',
    department: '',
  });

  const getDateFromInput = () => {
    const { startYear, startMonth, endYear, endMonth } = dateInfo;
    const startDateObj = new Date(startYear, startMonth - 1);
    const endDateObj = new Date(endYear, endMonth - 1);

    let startDate = `${startDateObj.getFullYear()}-${
      startDateObj.getMonth() + 1
    }`;
    let endDate = `${endDateObj.getFullYear()}-${endDateObj.getMonth() + 1}`;

    if (endDate === '1899-12') {
      endDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}`;
    }

    return {
      startDate,
      endDate,
    };
  };

  const handleChangeDate = e => {
    const { name, value } = e.target;
    setDateInfo({ ...dateInfo, [name]: value });
  };

  const handleChangeCareer = e => {
    const { name, value } = e.target;
    setCareerInfo({ ...careerInfo, [name]: value });
  };

  const [, setAddCareerData] = useRecoilState(addCareerDataState);
  const handleSubmitCareer = () => {
    setAddCareerData([{ ...careerInfo, ...getDateFromInput() }]);
  };

  return (
    <S.FormCareer>
      <S.CareerDate>
        <S.Inputs>
          <S.InputYear
            name="startYear"
            type="text"
            maxLength="4"
            className="year"
            placeholder="YYYY"
            value={dateInfo.startYear}
            onChange={handleChangeDate}
          />
          <span> . </span>
          <S.InputMonth
            name="startMonth"
            type="text"
            maxLength="2"
            className="month"
            placeholder="MM"
            value={dateInfo.startMonth}
            onChange={handleChangeDate}
          />
          <span> - </span>
          {!isCheckedFormCareer && (
            <>
              <S.InputYear
                name="endYear"
                type="text"
                maxLength="4"
                className="year"
                placeholder="YYYY"
                value={dateInfo.endYear}
                onChange={handleChangeDate}
              />
              <span> . </span>
              <S.InputMonth
                name="endMonth"
                type="text"
                maxLength="2"
                className="month"
                placeholder="MM"
                value={dateInfo.endMonth}
                onChange={handleChangeDate}
              />
            </>
          )}
        </S.Inputs>
        <S.Description>
          <S.DescriptionInput
            type="checkbox"
            checked={isCheckedFormCareer}
            onChange={() => {
              setIsCheckedFormCareer(prev => !prev);
              setDateInfo({ ...dateInfo, endYear: '', endMonth: '' });
            }}
          />
          <span>현재 재직중</span>
        </S.Description>
      </S.CareerDate>
      <S.CareerInfo>
        <S.CareerInfoInput
          type="text"
          maxLength="50"
          name="companyName"
          value={careerInfo.companyName}
          placeholder="회사명"
          onChange={handleChangeCareer}
        />
        <S.CareerInfoInput
          type="text"
          maxLength="50"
          name="department"
          value={careerInfo.department}
          placeholder="부서명/직책"
          onChange={handleChangeCareer}
        />
      </S.CareerInfo>
      <S.SubmitCareerButton onClick={handleSubmitCareer}>
        확인
      </S.SubmitCareerButton>
    </S.FormCareer>
  );
}
