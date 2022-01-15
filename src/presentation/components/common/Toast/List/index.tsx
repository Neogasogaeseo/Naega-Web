import { toastState } from '@stores/toast';
import { useRecoilValue } from 'recoil';
import ToastItem from '../Item';
import { StToastList } from './style';

function ToastList() {
  const toasts = useRecoilValue(toastState);
  return (
    <StToastList>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} {...toast} />
      ))}
    </StToastList>
  );
}

export default ToastList;
