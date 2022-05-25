import { ReportService } from '@api/service-report';

export function reportDataMock(): ReportService {
  const getServiceCenterCategories = async () => {
    return [
      { id: 1, content: '서진서진' },
      { id: 2, content: '주영주영' },
      { id: 3, content: '지연지연' },
      { id: 4, content: '효인효인' },
    ];
  };

  const getFeedbackCategories = async () => {
    return [
      { id: 1, content: '서진서진' },
      { id: 2, content: '주영주영' },
      { id: 3, content: '지연지연' },
      { id: 4, content: '효인효인' },
    ];
  };

  const postReport = async () => {
    return { isSuccess: true };
  };

  return { getServiceCenterCategories, getFeedbackCategories, postReport };
}
