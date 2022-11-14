/**
 * @type {import('next').NextConfig}
 */
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@babel/preset-react',
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/interaction',
  '@fullcalendar/list',
  '@fullcalendar/react',
  '@fullcalendar/timegrid',
  '@fullcalendar/timeline'
]);

module.exports = withPlugins([withTM], {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['flagcdn.com']
  },
  env: {
    REACT_APP_VERSION: process.env.REACT_APP_VERSION,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
  },
  experimental: {
    modularizeImports: {
      '@mui/material/?(((\\w*)?/?)*)': {
        transform: '@mui/material/{{ matches.[1] }}/{{member}}'
      },
      '@mui/icons-material/?(((\\w*)?/?)*)': {
        transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}'
      },
      '@fullcalendar/?(((\\w*)?/?)*)': {
        transform: '@fullcalendar/{{ matches.[1] }}/{{member}}'
      }
    }
  },
  async redirects() {
    // redirect - default first page should be `login` when root URL like http://example.com/
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true
      }
    ];
  }
});
