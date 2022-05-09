import { Keyword } from '@api/types/user';
import { icCloseGrey, icCloseWhite } from '@assets/icons';
import { COLOR } from '@styles/common/color';
import { StKeywordItem, StCount, StMyDeleteBtn } from './style';

interface Props extends Keyword {
  isMutable: boolean;
  isMine?: boolean;
  onDeleteClick?: () => void;
  onItemClick?: () => void;
  viewMode: 'linear' | 'flex';
}

function KeywordItem(props: Props) {
  const {
    isMutable,
    isMine,
    content,
    color,
    fontColor,
    onDeleteClick,
    onItemClick,
    viewMode,
    count,
  } = props;
  return (
    <StKeywordItem color={color} fontColor={fontColor} onClick={onItemClick}>
      <div>
        <div>{content}</div>
        {isMutable && !isMine && (
          <img
            onClick={onDeleteClick}
            src={viewMode === 'linear' || color === COLOR.GRAY_2 ? icCloseGrey : icCloseWhite}
          />
        )}
      </div>
      {viewMode === 'linear' && <StCount>{count}</StCount>}
      {isMine && isMutable && <StMyDeleteBtn onClick={onDeleteClick}>삭제</StMyDeleteBtn>}
    </StKeywordItem>
  );
}

export default KeywordItem;
