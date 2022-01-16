import { neososeoFormState } from '@stores/neososeo-form';
import React from 'react';
import { useRecoilValue } from 'recoil';

function NeososeoFormAnswer() {
  const neososeoFormData = useRecoilValue(neososeoFormState);
  if (!neososeoFormData) return <></>;
  return (
    <div>
      <div>{neososeoFormData.content}</div>
    </div>
  );
}

export default NeososeoFormAnswer;
