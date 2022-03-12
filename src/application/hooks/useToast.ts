import { useRecoilState } from 'recoil';

import { Toast, toastState } from '@stores/toast';
import { getRandomID } from '@utils/etc';

export function useToast() {
  const [toasts, setToasts] = useRecoilState(toastState);

  const removeToast = (toastID: Toast['id']) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastID));
  };

  const fireToast = (toast: Toast) => {
    const toastID = getRandomID();
    setToasts((prev) => [...prev, { ...toast, id: toastID, duration: toast.duration ?? 1000 }]);
    setTimeout(() => removeToast(toastID), 600 + (toast.duration ?? 1000));
  };

  return { toasts, fireToast };
}
