import { ReportService } from '@api/service-report';

export function reportDataMock(): ReportService {
  const getServiceCenterCategories = async () => {
    return [
      { id: 1, content: '계정' },
      { id: 2, content: '답변 신고' },
      { id: 3, content: '오류 신고 및 피드백' },
      { id: 4, content: '너소서 질문 제안' },
      { id: 5, content: '기타' },
    ];
  };

  const postReport = async () => {
    return { isSuccess: true };
  };

  return { getServiceCenterCategories, postReport };
}
