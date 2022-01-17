import { api } from '@api/index';
import NeososeoFormHeader from '@components/common/NeososeoFormHeader';
import FormRouter from '@routes/FormRouter';
import { neososeoAnswerState, neososeoFormState } from '@stores/neososeo-form';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { StNeososeoFormPage } from './style';

function NeososeoFormPage() {
  const { userID, formID } = useParams();
  const [neososeoForm, setNeososeoForm] = useRecoilState(neososeoFormState);
  const setNeoseosoAnswer = useSetRecoilState(neososeoAnswerState);

  useEffect(() => {
    if (!userID || !formID) return;
    (async () => {
      const data = await api.neososeoFormService.getFormInfo(userID, formID);
      setNeososeoForm(data);
      setNeoseosoAnswer((prev) => ({ ...prev, userID: data.userID, formID: data.formID }));
    })();
  }, [userID, formID]);

  return (
    <StNeososeoFormPage>
      {neososeoForm && (
        <NeososeoFormHeader title={neososeoForm.title} image={neososeoForm.imageSub} />
      )}
      <FormRouter />
    </StNeososeoFormPage>
  );
}

export default NeososeoFormPage;
