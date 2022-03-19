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
      <Outlet context={{ neososeoFormData: isLoading ? undefined : neososeoFormData }} />
    </StNeososeoFormPage>
  );
}

export default NeososeoFormPage;
