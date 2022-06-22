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

export class InternalServerError implements CustomError {
  code: 500;
  name: 'Internal Server Error';
  message: string;
  description: string;

  constructor(message: string) {
    this.code = 500;
    this.name = 'Internal Server Error';
    this.message = message;
    this.description =
      '현재 내부 서버에 오류가 있거나' + '\n' + '찾고 있는 리소스에 문제가 있어 표시할 수 없어요';
  }
}
