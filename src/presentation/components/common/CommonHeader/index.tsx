import { useNavigate } from 'react-router-dom';

import { IcBell, IcSetting } from '@assets/icons';
import { ImgLogoHeader } from '@assets/images';
import { StCommonHeader } from './style';

export default function CommonHeader() {
  const navigate = useNavigate();
  return (
    <StCommonHeader>
      <div>
        <ImgLogoHeader
          onClick={() => {
            navigate('/home');
          }}
        />
        <div>
          <IcSetting />
          <IcBell />
        </div>
      </div>
      <div />
    </StCommonHeader>
  );
}
