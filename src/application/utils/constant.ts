const isProduction = process.env.NODE_ENV === 'production';
export const DOMAIN = isProduction ? 'https://naegasogaeseo-dev.kro.kr' : 'http://localhost:3000';

export const PAGES = { KEYWORD: 15, NOTICE: 15, PICK: 10, SEARCHED_USER: 16 };

export const SCROLL_BOTTOM_PADDING = 30;

export const MAX_TEAM_MEMBER = 4;

export const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  DB_ERROR: 600,
};

export const TOKEN_KEYS = { ACCESS: 'accessToken', REFRESH: 'refreshToken' };

export const INITIAL_LOGIN_USER = {
  isJoined: false,
  accessToken: '',
  refreshToken: '',
  user: { id: -1, userID: '', username: '', profileImage: '' },
};
