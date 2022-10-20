import { useParams, Outlet } from 'react-router-dom';

import { useGetFormInfo } from '@hooks/queries/neososeo-form';
import { StNeososeoFormPage } from './style';

function NeososeoFormPage() {
  const { q } = useParams();
  const { data: neososeoFormData, isLoading } = useGetFormInfo(q ?? '');

  return (
    <StNeososeoFormPage>
      {!isLoading && neososeoFormData !== undefined && <Outlet context={{ neososeoFormData }} />}
    </StNeososeoFormPage>
  );
}

export default NeososeoFormPage;
