module.exports = {
    images: {
      // Remove the 'domains' configuration and replace it with 'remotePatterns'
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
  