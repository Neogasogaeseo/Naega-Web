import { api } from '@api/index';
import NeososeoFormHeader from '@components/common/NeososeoFormHeader';
import GoogleAdsense from '@components/GoogleAdsense';
import FormRouter from '@routes/FormRouter';
import { neososeoAnswerState, neososeoFormState } from '@stores/neososeo-form';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { StNeososeoFormPage } from './style';

function NeososeoFormPage() {
  const { q } = useParams();
  const [neososeoForm, setNeososeoForm] = useRecoilState(neososeoFormState);
  const setNeoseosoAnswer = useSetRecoilState(neososeoAnswerState);

  useEffect(() => {
    if (!q) return;
    (async () => {
      const data = await api.neososeoFormService.getFormInfo(q);
      setNeososeoForm(data);
      setNeoseosoAnswer((prev) => ({ ...prev, userID: data.userID, formID: data.formID }));
    })();
  }, [q]);

  return (
    <StNeososeoFormPage>
      <GoogleAdsense />
      {neososeoForm && (
        <NeososeoFormHeader title={neososeoForm.title} image={neososeoForm.imageSub} />
      )}
      <FormRouter />
    </StNeososeoFormPage>
  );
}

export default NeososeoFormPage;
