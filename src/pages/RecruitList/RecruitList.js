import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import * as S from './RecruitListStyled';
import { BsFillBookmarkFill, BsChevronRight } from 'react-icons/bs';
import { API } from '../../api';
import CareerNav from '../Career/components/CareerNav/CareerNav';

export default function RecruitList() {
  const [list, setList] = useState([]);
  const [scroll, setScroll] = useState(1);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setScroll(prev => prev + 1);
    }
  }, [inView]);

  useEffect(() => {
    fetch(`${API.GET_JOBS}?offset=0&limit=${scroll * 5}`)
      .then(response => response.json())
      .then(data => setList(data.jobs));
  }, [scroll]);

  return (
    <>
      <CareerNav />
      <S.RecruitList>
        <S.BookMark>
          <S.MarkButton>
            <BsFillBookmarkFill size="20" />
            <S.MarkText>북마크 모아보기</S.MarkText>
            <BsChevronRight size="20" />
          </S.MarkButton>
        </S.BookMark>
        {list.map(text => {
          return (
            <S.ListLi key={text.jobId}>
              <S.ListLink>
                <S.Header url={text.mainImageUrl} />
                <S.ListTextBox>
                  <S.ListText size="23px">{text.companyName}</S.ListText>
                  <S.ListText size="18px">{text.department}</S.ListText>
                  <S.ListButton>
                    <span>응답률 매우 높음</span>
                  </S.ListButton>
                  <S.ListSeoul>
                    서울<span>.</span> 한국
                  </S.ListSeoul>
                  <S.ListMoney>채용보상금 1,000,000원</S.ListMoney>
                </S.ListTextBox>
              </S.ListLink>
              <div ref={ref}>{inView.toString()}</div>
            </S.ListLi>
          );
        })}
      </S.RecruitList>
    </>
  );
}
