import { useState } from 'react';

export default function useCopyClipboard(): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  (text: string) => Promise<boolean>,
] {
  const [isCopy, setIsCopy] = useState<boolean>(false);
  const copyClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopy(true);
      return true;
    } catch (error) {
      console.error(error);
      setIsCopy(false);
      return false;
    }
  };
  return [isCopy, setIsCopy, copyClipboard];
}
