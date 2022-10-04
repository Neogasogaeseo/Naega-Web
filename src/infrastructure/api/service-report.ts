export interface ReportService {
  getServiceCenterCategories(): Promise<{ id: number; content: string }[]>;
  postReport(
    categoryID: number,
    title: string,
    content: string,
    email: string,
    image?: File,
  ): Promise<{ isSuccess: boolean }>;
}
