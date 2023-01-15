import { Keyword } from '@api/types/user';
import { COLOR } from '@styles/common/color';
import { StCount, StKeywordCloseBtn, StKeywordItem, StMyDeleteBtn } from './style';

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
          <StKeywordCloseBtn
            onClick={onDeleteClick}
            theme={viewMode === 'linear' || color === COLOR.GRAY_2 ? 'grey' : 'color'}
            color={fontColor}
          />
        )}
      </div>
      {viewMode === 'linear' && <StCount>{count}</StCount>}
      {isMine && isMutable && <StMyDeleteBtn onClick={onDeleteClick}>삭제</StMyDeleteBtn>}
    </StKeywordItem>
  );
}

export default KeywordItem;
