import { api } from '@api/index';
import FormRouter from '@routes/FormRouter';
import { neoseosoAnswerState, neososeoFormState } from '@stores/neososeo-form';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { StNeososeoFormPage, StNeososeoFormHeader } from './style';

function NeososeoFormPage() {
  const { userID, formID } = useParams();
  const [neososeoForm, setNeososeoForm] = useRecoilState(neososeoFormState);
  const setNeoseosoAnswerResponse = useSetRecoilState(neoseosoAnswerState);

  useEffect(() => {
    if (!userID || !formID) return;
    if (isNaN(+userID) || isNaN(+formID)) return;
    (async () => {
      const data = await api.neososeoFormService.getFormInfo(+userID, +formID);
      setNeososeoForm(data);
      setNeoseosoAnswerResponse((prev) => ({ ...prev, userID: data.userID, formID: data.formID }));
    })();
  }, [userID, formID]);

  return (
    <StNeososeoFormPage>
      {neososeoForm && (
        <StNeososeoFormHeader>
          <div>{neososeoForm.title}</div>
          <img src={neososeoForm.imageSub} alt={neososeoForm.title} />
        </StNeososeoFormHeader>
      )}
      <FormRouter />
    </StNeososeoFormPage>
  );
}

export default NeososeoFormPage;
