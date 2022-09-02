import { useEffect, useRef } from 'react';
import * as S from './Map.Styled';

function Map() {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(37.5065, 127.0536);
    const mapOptions = {
      center: location,
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map: map,
    });
  }, []);

  return (
    <>
      <S.Wrap>
        <S.DeadLine>마감일</S.DeadLine>
        <S.Location>상시</S.Location>
      </S.Wrap>
      <S.Wrap>
        <S.DeadLine>근무지역</S.DeadLine>
        <S.Location>
          서울시 강남구 테헤란로 427 위워크 선릉2호점 13층
        </S.Location>
      </S.Wrap>
      <S.MapLayout ref={mapElement} />;
    </>
  );
}

export default Map;
