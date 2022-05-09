export const isProduction = process.env.NODE_ENV === 'production';
export const DOMAIN = isProduction ? 'https://neogasogaeseo.com' : 'http://localhost:3000';
export const KEYWORD_PAGE = 15;
export const NOTICE_PAGE = 15;
export const PICK_PAGE = 10;
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
export const SEARCHED_USER_PAGE = 16;
