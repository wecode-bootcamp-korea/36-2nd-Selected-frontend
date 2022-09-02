import * as S from './CareerNavDetail.Styled.js';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { useState } from 'react';
import { GrPowerReset } from 'react-icons/gr';
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';
import {
  MAIN_LOCATION_LIST,
  SUB_LOCATION_LIST,
} from './CareerNavDetail.Data.js';

export default function CareerNavDetail() {
  const [hasOpenedLocation, setHasOpenedLocation] = useState(false);
  const [hasOpenedCareer, setHasOpenedCareer] = useState(false);

  return (
    <>
      <S.NavDetails>
        <S.NavDetailsSelectors>
          <S.NavDetailButton onClick={() => setHasOpenedLocation(true)}>
            <S.NavDetailTitleSpan>지역</S.NavDetailTitleSpan>
            <S.NavDetailOptionSpan>한국</S.NavDetailOptionSpan>
          </S.NavDetailButton>
          <S.NavDetailButton onClick={() => setHasOpenedCareer(true)}>
            <S.NavDetailTitleSpan>경력</S.NavDetailTitleSpan>
            <S.NavDetailOptionSpan>신입 - 3년</S.NavDetailOptionSpan>
            <AiOutlineCaretDown />
          </S.NavDetailButton>
          <S.NavDetailButton>
            <S.NavDetailTitleSpan>기술 스택</S.NavDetailTitleSpan>
            <AiOutlineCaretDown />
          </S.NavDetailButton>
        </S.NavDetailsSelectors>
        <S.NavDetailButton>
          <S.NavDetailTitleSpan>응답률순</S.NavDetailTitleSpan>
          <AiOutlineCaretDown />
        </S.NavDetailButton>
      </S.NavDetails>
      {hasOpenedLocation && (
        <NavDetailModal setHasOpenedLocation={setHasOpenedLocation} />
      )}
      {hasOpenedCareer && (
        <CareerModal setHasOpenedCareer={setHasOpenedCareer} />
      )}
    </>
  );
}

function NavDetailModal({ setHasOpenedLocation }) {
  const [selectedLocation, setSelectedLocation] = useState({
    main: -1,
    sub: -1,
  });

  return (
    <>
      <S.NavDetailModal>
        <S.NavDetailModalContainer>
          <S.DetailModalHeader>
            <S.DetailModalReset>
              초기화
              <GrPowerReset />
            </S.DetailModalReset>
            <S.DetailModalTitle>지역</S.DetailModalTitle>
            <S.DetailModalCloseButton
              onClick={() => setHasOpenedLocation(false)}
            >
              X
            </S.DetailModalCloseButton>
          </S.DetailModalHeader>
          <S.DetailModalCountrySelector>국가</S.DetailModalCountrySelector>
          <S.DetailModalCountryButton defaultValue="한국">
            <option>전세계</option>
            <option>한국</option>
            <option>미국</option>
          </S.DetailModalCountryButton>
          <S.DetailModalLocationHeader>
            <S.DetailModalLocationHeaderTitle>
              지역
            </S.DetailModalLocationHeaderTitle>
            <S.DetailModalLocationHeaderTitle>
              상세지역
            </S.DetailModalLocationHeaderTitle>
          </S.DetailModalLocationHeader>
          <S.DetailModalLocationSelectorContainer>
            <S.DetailModalLocationUl>
              {MAIN_LOCATION_LIST.map(
                ({ mainLocationId, mainLocationName }) => (
                  <S.LocationSelectorLi
                    key={mainLocationId}
                    onClick={() =>
                      setSelectedLocation({ main: mainLocationId, sub: -1 })
                    }
                    locationId={{
                      main: mainLocationId,
                      sub: selectedLocation.sub,
                    }}
                    selectedLocation={selectedLocation}
                  >
                    {mainLocationName}
                  </S.LocationSelectorLi>
                )
              )}
            </S.DetailModalLocationUl>
            <S.DetailModalLocationUl>
              {selectedLocation.main !== -1 &&
                SUB_LOCATION_LIST[selectedLocation.main].map(
                  ({ subLocationId, subLocationName }, mainLocationId) => (
                    <S.LocationSelectorLi
                      key={subLocationId}
                      onClick={() =>
                        setSelectedLocation({
                          ...selectedLocation,
                          sub: subLocationId,
                        })
                      }
                      locationId={{
                        main: selectedLocation.main,
                        sub: subLocationId,
                      }}
                      selectedLocation={selectedLocation}
                    >
                      {subLocationName}
                    </S.LocationSelectorLi>
                  )
                )}
            </S.DetailModalLocationUl>
          </S.DetailModalLocationSelectorContainer>
        </S.NavDetailModalContainer>
        <S.DetailModalTagsContainer>
          <S.DetailModalTagButton>서울 전체</S.DetailModalTagButton>
        </S.DetailModalTagsContainer>
        <S.DetailModalSubmitContainer>
          <S.DetailModalSubmitButton
            onClick={() => setHasOpenedLocation(false)}
          >
            확인
          </S.DetailModalSubmitButton>
        </S.DetailModalSubmitContainer>
      </S.NavDetailModal>
      <S.ModalBackGround onClick={() => setHasOpenedLocation(false)} />
    </>
  );
}

function CareerModal({ setHasOpenedCareer }) {
  const titleCancel = '취소';
  const titleSubmit = '적용하기';
  return (
    <>
      <S.CareerModal>
        <S.CareerModalContainer>
          <S.CareerModalHeader>신입 - 3년</S.CareerModalHeader>
          <Range />
          <S.CareerModalSubmitContainer>
            <S.CareerModalSubmitButton
              title={titleCancel}
              onClick={() => setHasOpenedCareer(false)}
            >
              {titleCancel}
            </S.CareerModalSubmitButton>
            <S.CareerModalSubmitButton
              title={titleSubmit}
              onClick={() => setHasOpenedCareer(false)}
            >
              {titleSubmit}
            </S.CareerModalSubmitButton>
          </S.CareerModalSubmitContainer>
        </S.CareerModalContainer>
      </S.CareerModal>
      <S.ModalBackGround
        background="none"
        onClick={() => setHasOpenedCareer(false)}
      />
    </>
  );
}
