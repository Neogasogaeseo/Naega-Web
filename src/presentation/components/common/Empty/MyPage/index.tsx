import { StButton, StLabel, StMyEmptyView } from './style';

type MyEmptyViewProps = {
  isMyPage: boolean;
  origin: string;
  pickTarget: string;
  onPickButtonClicked: () => void;
};

function MyEmptyView(props: MyEmptyViewProps) {
  const { isMyPage, origin, pickTarget, onPickButtonClicked } = props;
  return (
    <StMyEmptyView>
      <div>픽한 {pickTarget}이 없어요</div>
      {isMyPage && (
        <StLabel>
          {origin}에서 받은 {pickTarget}들 중<br />
          마음에 드는 {pickTarget}을 픽해보세요
        </StLabel>
      )}
      {isMyPage && <StButton onClick={onPickButtonClicked}>{origin} 픽 하러 가기</StButton>}
    </StMyEmptyView>
  );
}

export default MyEmptyView;
