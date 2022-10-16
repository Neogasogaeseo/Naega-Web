import CommonModal from '@components/common/Modal';
import React, { useCallback, useEffect, useState } from 'react';

const InAppBrowserEscape = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
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
    const isInAppBrowser = navigator.userAgent.match(
      /inapp|NAVER|KAKAOTALK|Snapchat|Line|WirtschaftsWoche|Thunderbird|Instagram|everytimeApp|WhatsApp|Electron|wadiz|AliApp|zumapp|iPhone(.*)Whale|Android(.*)Whale|kakaostory|band|twitter|DaumApps|DaumDevice\/mobile|FB_IAB|FB4A|FBAN|FBIOS|FBSS|SamsungBrowser\/[^1]/i,
    );
    if (isInAppBrowser !== null) setIsModalOpened(true);
  }, []);

  return (
    <CommonModal
      title="알림"
      description={
        '더 쾌적하게 너가소개서를 이용하기 위해' + '\n' + '외부 브라우저에서 접속해 주세요.'
      }
      onClickCancel={() => setIsModalOpened(false)}
      onClickConfirm={openRealBrowser}
      isOpened={isModalOpened}
    />
  );
};

export default InAppBrowserEscape;
