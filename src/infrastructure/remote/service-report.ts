import { ReportService } from '@api/service-report';
import { privateAPI } from './base';

export function reportRemote(): ReportService {
  const getServiceCenterCategories = async () => {
    const response = await privateAPI.get({ url: '/report' });
    return response.data.reportCategory.map((category: any) => ({
      id: category.id,
      content: category.name,
    }));
  };

  const postReport = async (
    categoryID: number,
    title: string,
    content: string,
    email: string,
    image?: File,
  ) => {
    const formData = new FormData();
    formData.append('reportCategoryId', categoryID.toString());
    formData.append('title', title);
    formData.append('content', content);
    formData.append('email', email);
    image && formData.append('image', image);
    const response = await privateAPI
      .post({ url: '/report', data: formData, type: 'multipart' })
      .catch((error) => {
        throw error;
      });
    return { isSuccess: response.success };
  };

  return { getServiceCenterCategories, postReport };
}
