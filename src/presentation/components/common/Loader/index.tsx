import BeatLoader from 'react-spinners/BeatLoader';
import { COLOR } from '@styles/common/color';
import { StCommonLoader } from './style';

function CommonLoader() {
  return (
    <StCommonLoader>
      <BeatLoader color={COLOR.CORAL_MAIN} />
    </StCommonLoader>
  );
}

export default CommonLoader;
