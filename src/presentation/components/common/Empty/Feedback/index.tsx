import { imgEmptyFeedback } from '@assets/images';
import { StFeedbackEmptyView } from './style';

interface FeedbackEmptyViewProps {
  hasThumbnail: boolean;
}

function FeedbackEmptyView(props: FeedbackEmptyViewProps) {
  const { hasThumbnail } = props;

  return (
    <StFeedbackEmptyView hasThumbnail={hasThumbnail}>
      <img src={imgEmptyFeedback} />
      <div>아직 피드백이 없어요</div>
      <div>첫번째 피드백을 남겨주세요</div>
    </StFeedbackEmptyView>
  );
}

export default FeedbackEmptyView;
