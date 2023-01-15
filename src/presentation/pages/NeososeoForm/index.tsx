import GoogleAdsense from '@components/GoogleAdsense';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { useGetFormInfo } from '@hooks/queries/neososeo-form';
import { COLOR } from '@styles/common/color';
import { StNeososeoFormPage } from './style';

const useBackgroundColor = () => {
  const location = useLocation();
  const isStartPage = location.pathname.split('/').length === 3;
  return isStartPage ? COLOR.GRAY_1 : COLOR.WHITE;
};

function NeososeoFormPage() {
  const { q } = useParams();
  const { data: neososeoFormData, isLoading } = useGetFormInfo(q ?? '');
  const backgroundColor = useBackgroundColor();

  return (
    <StNeososeoFormPage bg={backgroundColor}>
      <GoogleAdsense />
      {!isLoading && neososeoFormData !== undefined && <Outlet context={{ neososeoFormData }} />}
    </StNeososeoFormPage>
  );
}

export default NeososeoFormPage;
