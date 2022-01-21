export const isProduction = process.env.NODE_ENV === 'production';
export const DOMAIN = isProduction ? 'https://neogasogaeseo.com/' : 'http://localhost:3000/';
