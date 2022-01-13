import { IssueDetail } from '@api/types/team';
import { icDot } from '@assets/icons';
import ImmutableKeywordList from '@components/common/Keyword/ImmutableList';
import { StIssueCard, StHeader, StBody, StBookmark } from './style';

type IssueCardProps = IssueDetail;

function IssueCard(props: IssueCardProps) {
  const { writer, target, body, createdAt, keywordList, isMine, isBookmarked } = props;
  return (
    <StIssueCard>
      <StHeader>
        <div>@{target}</div>
        <div>
          <div>{writer}</div>
          <img src={icDot} alt="dot" />
          <div>{createdAt}</div>
        </div>
        {isMine && <StBookmark selected={isBookmarked} />}
      </StHeader>
      <StBody>{body}</StBody>
      <ImmutableKeywordList
        keywordList={keywordList}
        onItemClick={() => {
          return;
        }}
      />
    </StIssueCard>
  );
}

export default IssueCard;
