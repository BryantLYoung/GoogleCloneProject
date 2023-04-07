// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '1000logos.net',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'www.google.co.uk',
        port: '',
        pathname: '/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      },
    ],
  },
}
