import { Adsense } from '@ctrl/react-adsense';
import { isProduction } from '@utils/constant';
import { StDummyAdvertiseBlock } from './style';

function GoogleAdsense() {
  if (!isProduction) {
    return <StDummyAdvertiseBlock />;
  }

  return (
    <Adsense
      client="ca-pub-6625943874572956"
      slot="8554867589"
      layout="display"
      style={{ width: '100%', height: '50px', position: 'absolute', top: 0, left: 0, padding: 0 }}
    />
  );
}

export default GoogleAdsense;
