import CommonModal from '@components/common/Modal';
import { useCallback, useEffect, useState } from 'react';

import { useLoginUser } from '@hooks/useLoginUser';

const InAppBrowserEscape = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { isAuthenticated } = useLoginUser();

  const openRealBrowser = useCallback(() => {
    const isIOS = navigator.userAgent.match(/iPhone|iPad/i);
    if (isIOS) {
      location.href = 'googlechrome://' + location.href.replace(/https?:\/\//i, '');
    } else {
      location.href =
        'intent://' +
        location.href.replace(/https?:\/\//i, '') +
        '#Intent;scheme=http;package=com.android.chrome;end';
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;

    const isInAppBrowser = navigator.userAgent.match(
      /inapp|NAVER|KAKAOTALK|Snapchat|Line|WirtschaftsWoche|Thunderbird|Instagram|everytimeApp|WhatsApp|Electron|wadiz|AliApp|zumapp|iPhone(.*)Whale|Android(.*)Whale|kakaostory|band|twitter|DaumApps|DaumDevice\/mobile|FB_IAB|FB4A|FBAN|FBIOS|FBSS|SamsungBrowser\/[^1]/i,
    );
    if (isInAppBrowser !== null) setIsModalOpened(true);
  }, [isAuthenticated]);

  return (
    <CommonModal
      title="알림"
      description={
        '크롬 앱으로 접속하면' +
        '\n' +
        '더 쾌적한 환경에서 이용할 수 있습니다.' +
        '\n' +
        '*크롬 앱이 없다면 취소를 눌러주세요'
      }
      onClickCancel={() => setIsModalOpened(false)}
      onClickConfirm={openRealBrowser}
      confirmLabel="크롬에서 보기"
      isOpened={isModalOpened}
    />
  );
};

export default InAppBrowserEscape;
