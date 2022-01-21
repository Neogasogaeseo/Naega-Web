import { IcEmptyKeyword } from '@assets/icons';
import { StKeywordEmptyView } from './style';

function KeywordEmptyView() {
  return (
    <StKeywordEmptyView>
      <IcEmptyKeyword />
      <div>아직 받은 키워드가 없어요</div>
    </StKeywordEmptyView>
  );
}

export default KeywordEmptyView;
