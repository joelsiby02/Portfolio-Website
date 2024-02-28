module.exports = {
  images: {
    domains: ['github.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', // Specify the hostname of your image server
        port: '', // If your image source doesn't use a specific port, leave it empty
        pathname: '/350x500/**', // Specify the path pattern for your images
      },
    ],
  },
};
