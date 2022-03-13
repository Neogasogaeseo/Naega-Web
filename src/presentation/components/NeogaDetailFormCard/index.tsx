import { FeedAnswer } from '@api/types/neoga';
import { IcMeatball } from '@assets/icons';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import {
  StFeedContent,
  StFeedDate,
  StFeedHeader,
  StFeedName,
  StNeogaDetailFormCard,
} from './style';

type NeogaDetailFormCardProps = FeedAnswer & {
  openBottomSheet: (isPinned: boolean, id: number) => void;
};

function NeogaDetailFormCard(props: NeogaDetailFormCardProps) {
  const { id, name, relationship, content, createdAt, keywordList, openBottomSheet, isPinned } =
    props;

  return (
    <StNeogaDetailFormCard>
      <StFeedHeader>
        <StFeedName>
          <span>{name}</span>
          <span>·</span>
          <span>너를 {relationship}</span>
        </StFeedName>
        <div>
          <StFeedDate>
            <div>{createdAt}</div>
            <IcMeatball onClick={() => openBottomSheet(isPinned, id)} />
          </StFeedDate>
        </div>
      </StFeedHeader>
      <StFeedContent>{content}</StFeedContent>
      <ImmutableKeywordList keywordList={keywordList} onItemClick={() => null} />
    </StNeogaDetailFormCard>
  );
}

export default NeogaDetailFormCard;
