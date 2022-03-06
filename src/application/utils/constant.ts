export const isProduction = process.env.NODE_ENV === 'production';
export const DOMAIN = isProduction ? 'https://neogasogaeseo.com' : 'http://localhost:3000';
export const KEYWORD_PAGE = 15;
export const SCROLL_BOTTOM_PADDING = 30;
export const MAX_TEAM_MEMBER = 4;