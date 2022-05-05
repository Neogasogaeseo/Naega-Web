import { useToast } from '@hooks/useToast';
import { copyClipboard } from '@utils/copyClipboard';
import { StNeogaDetailFormEmptyView } from './style';

interface NeogaDetailFormEmptyViewProps {
  link: string;
}

function NeogaDetailFormEmptyView(props: NeogaDetailFormEmptyViewProps) {
  const { link } = props;
  const { fireToast } = useToast();

  return (
    <StNeogaDetailFormEmptyView>
      <div>아직 답변이 없어요.</div>
      <div>링크를 공유하고 답변을 받아보세요.</div>
      <button
        onClick={() =>
          copyClipboard(link, () => fireToast({ content: '링크가 클립보드에 저장되었습니다.' }))
        }
      >
        링크 복사하기
      </button>
    </StNeogaDetailFormEmptyView>
  );
}

export default NeogaDetailFormEmptyView;
