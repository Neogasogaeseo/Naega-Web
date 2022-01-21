export const isProduction = process.env.NODE_ENV === 'production';
export const DOMAIN = isProduction ? 'http://localhost:3000/' : 'https://neogasogaeseo.com/';
