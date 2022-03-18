export interface HeaderService {
  getIsNotice(userID: number): Promise<boolean>;
}
