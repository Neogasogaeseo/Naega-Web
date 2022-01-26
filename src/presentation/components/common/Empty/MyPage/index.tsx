import { icBookmarkSelected, IcEmptyFeedback } from '@assets/icons';
import { StButton, StLabel, StMyEmptyView } from './style';

type MyEmptyViewProps = {
  isMyPage: boolean;
  origin: string;
  onPickButtonClicked: () => void;
};

function MyEmptyView(props: MyEmptyViewProps) {
  const { isMyPage, origin, onPickButtonClicked } = props;
  return (
    <StMyEmptyView>
      <div>
        <img src={icBookmarkSelected} alt="북마크" />
        <div>Pick 한 소개가 없어요</div>
      </div>
      {isMyPage && (
        <StLabel>
          {origin}에서 받은 소개 중<br />
          마음에 드는 소개를 Pick 해주세요
        </StLabel>
      )}
      <IcEmptyFeedback />
      {isMyPage && <StButton onClick={onPickButtonClicked}>{origin} Pick 하러가기</StButton>}
    </StMyEmptyView>
  );
}

export default MyEmptyView;
