import React, { useState } from 'react';
import Image from 'next/image';

const SocialMediaPost = () => {
  const [activePlatform, setActivePlatform] = useState('linkedin');

  const handlePlatformChange = (platform) => {
    setActivePlatform(platform);
  };

  const posts = [
    {
      id: 1,
      imageUrl: 'https://github.com/joelsiby02/Post-Embedding-Portfolio/blob/main/Linkdin/DatawarsP.jpg?raw=true',
      platform: 'linkedin',
    },
    {
      id: 1,
      imageUrl: 'https://github.com/joelsiby02/Post-Embedding-Portfolio/blob/main/Linkdin/DatawarsP.jpg?raw=true',
      platform: 'linkedin',
    },
    
    // Add more posts as needed
  ];

  const filteredPosts = activePlatform === 'all' ? posts : posts.filter(post => post.platform === activePlatform);

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="flex justify-center space-x-4 my-8 overflow-x-auto">
        <button
          className={`border px-4 py-2 rounded-md ${activePlatform === 'all' && 'bg-blue-500 text-white'}`}
          onClick={() => handlePlatformChange('all')}
        >
          All
        </button>
        <button
          className={`border px-4 py-2 rounded-md ${activePlatform === 'linkedin' && 'bg-blue-500 text-white'}`}
          onClick={() => handlePlatformChange('linkedin')}
        >
          LinkedIn
        </button>
        <button
          className={`border px-4 py-2 rounded-md ${activePlatform === 'x' && 'bg-blue-500 text-white'}`}
          onClick={() => handlePlatformChange('x')}
        >
          X
        </button>
        <button
          className={`border px-4 py-2 rounded-md ${activePlatform === 'kaggle' && 'bg-blue-500 text-white'}`}
          onClick={() => handlePlatformChange('kaggle')}
        >
          Kaggle
        </button>
        <button
          className={`border px-4 py-2 rounded-md ${activePlatform === 'medium' && 'bg-blue-500 text-white'}`}
          onClick={() => handlePlatformChange('medium')}
        >
          Medium
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="w-full rounded-lg overflow-hidden shadow-md relative transition-transform transform hover:scale-105"
          >
            <Image src={post.imageUrl} alt={`Social Media Post ${post.id}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaPost;
