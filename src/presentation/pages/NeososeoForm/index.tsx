import { api } from '@api/index';
import { useQuery } from 'react-query';
import { useParams, Outlet } from 'react-router-dom';
import { StNeososeoFormPage } from './style';

function NeososeoFormPage() {
  const { q } = useParams();

  const { data: neososeoFormData, isLoading } = useQuery(['neososeoForm', q], () =>
    api.neososeoFormService.getFormInfo(q ?? ''),
  );

  return (
    <StNeososeoFormPage>
      {!isLoading && neososeoFormData !== undefined && <Outlet context={{ neososeoFormData }} />}
    </StNeososeoFormPage>
  );
}

export default NeososeoFormPage;
