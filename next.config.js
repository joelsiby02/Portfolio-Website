module.exports = {
  images: {
    domains: ['raw.githubusercontent.com', 'via.placeholder.com'],
    // If you have additional image sources, you can configure them using remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/350x500/**',
      },
    ],
  },
};
