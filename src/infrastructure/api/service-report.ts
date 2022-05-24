export interface ReportService {
  getServiceCenterCategories(): Promise<{ id: number; content: string }[]>;
  getFeedbackCategories(): Promise<{ id: number; content: string }[]>;
  postReport(
    categoryID: number,
    title: string,
    content: string,
    image?: File,
  ): Promise<{ isSuccess: boolean }>;
}
