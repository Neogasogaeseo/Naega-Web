export interface CustomError extends Error {
  code: number;
}

export class NotFoundError implements CustomError {
  code: 404;
  name: 'Not Found Error';
  message: string;

  constructor(message: string) {
    this.code = 404;
    this.name = 'Not Found Error';
    this.message = message;
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

  constructor(message: string) {
    this.code = 403;
    this.name = 'Forbidden Error';
    this.message = message;
  }
}
