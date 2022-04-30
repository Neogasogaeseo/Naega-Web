import { StMyPickEmptyView } from './style';

interface MyPickEmptyViewProps {
  pickType: 'neoga' | 'team';
}

function MyPickEmptyView(props: MyPickEmptyViewProps) {
  const { pickType } = props;
  const text = pickType === 'neoga' ? '답변' : '피드백';

  return (
    <StMyPickEmptyView>
      <div>아직 픽할 {text}이 없어요</div>
      <div>{text}을 받아보세요!</div>
    </StMyPickEmptyView>
  );
}

export default MyPickEmptyView;
