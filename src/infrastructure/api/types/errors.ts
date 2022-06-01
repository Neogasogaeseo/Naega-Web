export interface CustomError extends Error {
  code: number;
  description?: string;
}

export class NotFoundError implements CustomError {
  code: 404;
  name: 'Not Found Error';
  message: string;
  description: string;

  constructor(message: string) {
    this.code = 404;
    this.name = 'Not Found Error';
    this.message = message;
    this.description =
      '존재하지 않는 주소이거나, 요청하신 페이지의' + '\n' + '주소가 변경/삭제되어 찾을 수 없어요';
  }
}

export class UnauthorizedError implements CustomError {
  code: 401;
  name: 'Unauthorized Error';
  message: string;

  constructor(message: string) {
    this.code = 401;
    this.name = 'Unauthorized Error';
    this.message = message;
  }
}

export class ForbiddenError implements CustomError {
  code: 403;
  name: 'Forbidden Error';
  message: string;
  description: string;

  constructor(message: string) {
    this.code = 403;
    this.name = 'Forbidden Error';
    this.message = message;
    this.description = '관리자에게 팀 초대를 부탁해보세요';
  }
}
