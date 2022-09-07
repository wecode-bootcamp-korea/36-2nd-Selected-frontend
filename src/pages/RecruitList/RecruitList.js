import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import * as S from './RecruitListStyled';
import { BsFillBookmarkFill, BsChevronRight } from 'react-icons/bs';
import CareerNav from '../Career/components/CareerNav/CareerNav';
import { useLocation, useNavigate } from 'react-router-dom';
import { goToUrl } from '../../utills';
import { API } from '../../api';
export default function RecruitList() {
  const [list, setList] = useState([]);
  const [scroll, setScroll] = useState(1);
  const [navScroll, setNavScroll] = useState(0);
  const [ref, inView] = useInView();
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      setScroll(prev => prev + 1);
    }
  }, [inView]);

  const { pathname } = useLocation();

  let isDetail = pathname.indexOf('/detail') !== -1;
  let isRecuruitList = pathname === '/recruitlist';
  let count = isDetail ? 3 : 7;

  if (isDetail && scroll > 4) {
    setScroll(4);
  }

  useEffect(() => {
    if (pathname === '/') {
      fetch(`${API.GET_JOBS}?offset=0&limit=4`)
        .then(response => response.json())
        .then(data => setList(data.jobs));
    }
  }, []);

  useEffect(() => {
    if (!(pathname === '/')) {
      fetch(`${API.GET_JOBS}?offset=${(scroll - 1) * count}&limit=${count}`)
        .then(response => response.json())
        .then(data => setList([...list, ...data.jobs]));
    }
  }, [scroll]);
  console.log('list', list);

  useEffect(() => {
    const handleScroll = e => setNavScroll(e.currentTarget.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <CareerNav
        isDetail={isDetail}
        isRecuruitList={isRecuruitList}
        navScroll={navScroll}
      />
      <S.RecruitList>
        <S.BookMark
          isDetail={isDetail}
          isRecuruitList={isRecuruitList}
          navScroll={navScroll}
        >
          {isDetail ? (
            <S.MarkButton>
              <S.MarkText isDetail={isDetail}>
                이 포지션을 찾으셨나요?
              </S.MarkText>
            </S.MarkButton>
          ) : (
            <S.MarkButton>
              <BsFillBookmarkFill size="10" />
              <S.MarkText>북마크 모아보기</S.MarkText>
              <BsChevronRight size="10" />
            </S.MarkButton>
          )}
        </S.BookMark>
        {list.map(text => {
          return (
            <S.ListLi key={text.jobId}>
              <S.ListLink
                onClick={() => goToUrl(navigate, `/detail/${text.jobId}`)}
              >
                <S.Header url={text.mainImageUrl} />
                <S.ListTextBox>
                  <S.ListText size="18px">{text.companyName}</S.ListText>
                  <S.ListText size="14px">{text.department}</S.ListText>
                  <S.ListButton>
                    <S.ListButtonSpan>응답률 매우 높음</S.ListButtonSpan>
                  </S.ListButton>
                  <S.ListSeoul>
                    서울 <S.ListSeoulDiv /> 한국
                  </S.ListSeoul>
                  <S.ListMoney>채용보상금 1,000,000원</S.ListMoney>
                </S.ListTextBox>
              </S.ListLink>
            </S.ListLi>
          );
        })}
        <div ref={ref}>{inView}</div>
      </S.RecruitList>
    </>
  );
}
