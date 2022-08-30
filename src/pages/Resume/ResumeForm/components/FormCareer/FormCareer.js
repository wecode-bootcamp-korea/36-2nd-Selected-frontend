import { useState } from 'react';
import * as S from './FormCareer.Styled.js';

export default function FormCareer() {
  const [isChecked, setIsChecked] = useState(false);
  const [dataInfo, setDateInfo] = useState({
    startYear: '',
    startMonth: '',
    endYear: '',
    endMonth: '',
  });

  const [careerInfo, setCareerInfo] = useState({
    company: '',
    department: '',
  });

  const handleChangeDate = e => {
    const { name, value } = e.target;
    setDateInfo({ ...dataInfo, [name]: value });
  };
  const handleChangeCareer = e => {
    const { name, value } = e.target;
    setCareerInfo({ ...careerInfo, [name]: value });
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
            value={dataInfo.startYear}
            onChange={handleChangeDate}
          />
          <span> . </span>
          <S.InputMonth
            name="startMonth"
            type="text"
            maxLength="2"
            className="month"
            placeholder="MM"
            value={dataInfo.startMonth}
            onChange={handleChangeDate}
          />
          <span> - </span>
          {!isChecked && (
            <>
              <S.InputYear
                name="endYear"
                type="text"
                maxLength="4"
                className="year"
                placeholder="YYYY"
                value={dataInfo.endYear}
                onChange={handleChangeDate}
              />
              <span> . </span>

              <S.InputMonth
                name="endMonth"
                type="text"
                maxLength="2"
                className="month"
                placeholder="MM"
                value={dataInfo.endMonth}
                onChange={handleChangeDate}
              />
            </>
          )}
        </S.Inputs>
        <S.Description>
          <S.DescriptionInput
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(prev => !prev)}
          />
          <span>현재 재직중</span>
        </S.Description>
      </S.CareerDate>
      <S.CareerInfo>
        <S.CareerInfoInput
          type="text"
          maxLength="50"
          name="company"
          value={careerInfo.company}
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
    </S.FormCareer>
  );
}
