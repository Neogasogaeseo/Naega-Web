import { IcBell, IcSetting } from '@assets/icons';
import { ImgLogoHeader } from '@assets/images';
import { StCommonHeader } from './style';

export default function CommonHeader() {
  return (
    <StCommonHeader>
      <div>
        <ImgLogoHeader />
        <div>
          <IcSetting />
          <IcBell />
        </div>
      </div>
      <div />
    </StCommonHeader>
  );
}
