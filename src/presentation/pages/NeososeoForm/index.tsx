import { api } from '@api/index';
import FormRouter from '@routes/FormRouter';
import { neososeoFormState } from '@stores/neososeo-form';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { StNeososeoFormPage, StNeososeoFormHeader } from './style';

function NeososeoFormPage() {
  const { userID, formID } = useParams();
  const [neososeoForm, setNeososeoForm] = useRecoilState(neososeoFormState);

  useEffect(() => {
    if (!userID || !formID) return;
    if (isNaN(+userID) || isNaN(+formID)) return;
    (async () => {
      const data = await api.neososeoFormService.getFormInfo(+userID, +formID);
      setNeososeoForm(data);
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
