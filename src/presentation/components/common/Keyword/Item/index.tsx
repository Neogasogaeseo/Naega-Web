import { Keyword } from '@api/types/user';
import { icCloseGrey, icCloseWhite } from '@assets/icons';
import { COLOR } from '@styles/common/color';
import { StKeywordItem, StCount } from './style';

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
        {isMutable && (
          <img
            onClick={onDeleteClick}
            src={viewMode === 'linear' || color === COLOR.GRAY_2 ? icCloseGrey : icCloseWhite}
          />
        )}
      </div>
      {isMine && <StCount>{count}</StCount>}
    </StKeywordItem>
  );
}

export default KeywordItem;
