import * as S from './FormLink.Styled.js';
import { useRecoilState } from 'recoil';
import { addLinkDataState } from '../../../../../atom.js';
import { useState } from 'react';

export default function FormLink() {
  const [linkData, setLinkData] = useState('');
  const [, setAddLinkData] = useRecoilState(addLinkDataState);
  const handleSubmitLink = () => {
    setAddLinkData([{ linkUrl: linkData }]);
  };

  return (
    <S.FormLink>
      <S.LinkInput
        placeholder="http://"
        onClick={handleSubmitLink}
        value={linkData}
        onChange={e => setLinkData(e.target.value)}
      />
      <S.SubmitLinkButton>확인</S.SubmitLinkButton>
    </S.FormLink>
  );
}
